import React from "react";
import logo from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <div className="HomeParent">
      <div className="imageParent d-flex justify-content-center">
        <div className="image">
          <img src={logo} alt="man" />
        </div>
      </div>
      <div className="child d-flex justify-content-center">
        <div className="data">
          <h1 className="pt-1">start Framework</h1>
          <div className="icon d-flex justify-content-center pt-1">
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="pt-1">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  );
}
