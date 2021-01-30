import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul className="NavbarList">
        <li className="title">
          <h3>
            ET<span className="logoYellow">O</span>L
            <span className="logoYellow">O</span>G.SE
          </h3>
        </li>
        <li className="navLinks">rådgivning</li>
        <li className="navLinks">webkurser</li>
        <li className="navLinks">föreläsningar</li>
        <li className="navLinks">konsultuppdrag</li>
        <li className="navLinks">om oss</li>
        <li className="burger">X</li>
      </ul>
      <h2 className="slogan">KUNSKAP, KÄRLEK, KOMMUNIKATION – För alla djur</h2>
    </div>
  );
};

export default Navbar;
