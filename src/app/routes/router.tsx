import React, { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
} from "react-router-dom";
import App from "../../App";
import { Error404 } from "../../components/pages/Error404";
import { Adidas } from "../../components/pages/Adidas";
import { Puma } from "../../components/pages/Puma";
import { Abibas } from "../../components/pages/Abibas";
import { Prices } from "../../components/pages/Prices";
import { Model } from "../../components/pages/Model";
import { ProtectedPage } from "../../components/pages/ProtectedPage";
import { Login } from "../../components/pages/Login";

export const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  PRICES: "/prices",
  CROSS: "/:model/:id",
  PROTECTED: "/Protected",
  LOGIN: "/login",
  ERROR: "/error",
} as const;

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={PATH.ADIDAS} />,
  },
  {
    path: PATH.PUMA,
    element: <Puma />,
  },
  {
    path: PATH.ABIBAS,
    element: <Abibas />,
  },
  {
    path: PATH.ADIDAS,
    element: <Adidas />,
  },
  {
    path: PATH.PRICES,
    element: <Prices />,
  },
  {
    path: PATH.CROSS,
    element: <Model />,
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.ERROR,
    element: <Error404 />,
  },
];

const privateRoutes: RouteObject[] = [
  {
    path: PATH.PROTECTED,
    element: <ProtectedPage />,
  },
];

const ProtectedRoute = () => {
  const [isLogged, setIsLogged] = useState(true);

  return isLogged ? <Outlet /> : <Navigate to={"/login"} />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={"/error"} />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [...privateRoutes],
      },
      ...publicRoutes,
    ],
  },
]);
