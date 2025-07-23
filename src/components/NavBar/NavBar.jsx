import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="Nav p-4">
      <div className="container">
        <div className="d-flex justify-content-between w-100">
          <div className="logo">
            <h1>
              <Link to="/">Start Framework</Link>
            </h1>
          </div>
          <div className="list mt-3">
            <ul className="d-flex justify-content-between ">
              <li className="me-4">
                <NavLink to="About">About</NavLink>
              </li>
              <li className="me-4">
                <NavLink to="Portifolio">Protofolio</NavLink>
              </li>
              <li className="me-4">
                <NavLink to="Contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
