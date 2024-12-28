import React from "react";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="icon">
        <img src="\public\starbucks-logo.jpg" />
      </div>
      <div className=" menu">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Testimonials</li>
          <li>FAQ</li>
          <li>About-us</li>
        </ul>
      </div>
      <div className="login">
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
