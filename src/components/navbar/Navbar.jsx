import React, { useState } from "react";
import Logo from "../icons/logo.svg"
import './navbar.css'

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav container">
      <a href="#" className="nav__brand">
        <img src={Logo} alt="" />
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
          Our products
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
          Our projects
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
          About us
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
          Our team
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
          Contact us
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;