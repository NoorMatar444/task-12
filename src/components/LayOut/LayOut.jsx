import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";
import NavBar from "../NavBar/navBar";


export default function LayOut() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
