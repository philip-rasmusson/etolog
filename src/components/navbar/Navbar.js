import React from "react";
import "./Navbar.css";
import Logo from "./component/Logo";

const Navbar = (props) => {
  return (
    <div>
      <ul className="NavbarList">
        <li className="title">
          <Logo />
        </li>
        <li className="navLinks">{props.navLinkOne}</li>
        <li className="navLinks">{props.navLinkTwo}</li>
        <li className="navLinks">{props.navLinkThree}</li>
        <li className="navLinks">{props.navLinkFour}</li>
        <li className="navLinks">{props.navLinkFive}</li>
        <li className="burger">X</li>
      </ul>
      <h2 className="slogan">{props.slogan}</h2>
    </div>
  );
};

export default Navbar;
