import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img
          className="img"
          src="https://innovativetrading.co.uk/img/Innvoative.6b1013f1.svg"
          alt="img"
        />
      </div>

      
      <ul className="ul">
        <li className="li"> HOME </li>
        <li className="li"> ABOUT </li>
        <li className="li"> SERVICES </li>
        <li className="li"> CONTACT </li>
      </ul>
    </div>
  );
};

export default Navbar;
