import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="ContactParent ">
          <div className="header w-100 p-4 d-flex justify-content-center">
            <h1>conatct section</h1>
          </div>
          <div className="icon w-100 d-flex justify-content-center p-3">
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="form">
          <input type="text" name="userName" placeholder="userName" />
          <br />
          <br />
          <input type="text" name="userName" placeholder="userName" />
          <br />
          <br />
          <input type="text" name="userName" placeholder="userName" />
          <br />
          <br />
          <input type="text" name="userName" placeholder="userName" />
          <br />
          <br />
          <button className="p-2" type="button" name="submit">send message</button>
        </div>
      </div>
    </>
  );
}
