import React, { ReactElement, ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRoutePropsType = {
  children: ReactElement<any, any>;
};

export const ProtectedRoute = ({ children }: ProtectedRoutePropsType) => {
  const [isLogged, setIsLogged] = useState(false);

  return isLogged ? children : <Navigate to={"/login"} />;
};
