import React ,{useState}from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {MdOutlineRestaurant} from "react-icons/md";

import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu , setToggleMenu] =useState(false);
  return (
    <nav className="nav_bar">
      <div className="nav_logo">
        <img src="Restaurant.png" alt="R-logo" />
      </div>
      <ul className="nav_links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#search">Search</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav_login">
        <a href="#login">Login </a>
        <div></div>
        <a href="#register">Register</a>
        <div></div>
        <a href="/">Book Table</a>
      </div>
      <div className="app_nav-smallscreen">
        <GiHamburgerMenu color="yellow" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
        <div className="app_nav-smallscreen-overlay flex_center slide-bottom">
           <MdOutlineRestaurant fontSize={27} className="overlay_close" onClick={()=>setToggleMenu(false)}/>

          <ul className="nav_links-smallscreen">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#awards">Search</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#login">Login</a></li>
            <li><a href="#register">Register</a></li>
            <li><a href="#book">Book Table</a></li>
          </ul>
        </div>
      )}

      </div>
    </nav>
  );
};

export default Navbar;
