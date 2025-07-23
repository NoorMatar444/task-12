import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer p-5">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="one">
                <h1>LOCATION</h1>
                <p className="mt-1">2215 John Daniel Drive</p>
                <p className="mt-3">Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-4">
              <div className="two">
                <h1>AROUND THE WEB</h1>
                <div className="icons mt-3">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="three">
                <h1 className="mt-1">ABOUT FREELANCER</h1>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerDown p-3">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
