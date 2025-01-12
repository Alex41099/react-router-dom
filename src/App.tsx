import React, { useState } from "react";
import styles from "./components/Site.module.css";
import { Adidas } from "./components/pages/Adidas";
import { Puma } from "./components/pages/Puma";
import { Abibas } from "./components/pages/Abibas";
import { Navigate, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Error404 } from "./components/pages/Error404";
import styled from "styled-components";
import { S } from "./components/pages/_styles";
import { Model } from "./components/pages/Model";
import { Prices } from "./components/pages/Prices";
import { PATH } from "./app/routes/router";

function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper>
            <NavLink to={PATH.ADIDAS}>Adidas</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PUMA}>Puma</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.ABIBAS}>Abibas</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PRICES}>Prices</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PROTECTED}>Protected</NavLink>
          </S.NavWrapper>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

export default App;
