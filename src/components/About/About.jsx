import React from "react";

export default function About() {
  return (
    <div className="AboutParent">
      <div className="container">
        <div className="child">
          <div className="header d-flex justify-content-center p-3">
            <h1>ABOUT COMPONENT</h1>
          </div>
          <div className="icon d-flex justify-content-center p-3">
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="row">
            <div className="col-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
