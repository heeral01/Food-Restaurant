import React from "react";
import SubHead from "../../components/SubHead/SubHead";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header section_padding app_wrapper " id="home">
      <div className="Header-info">
        <SubHead title="Good food is foundation of genuine happiness" />
        <h1 className="Head_h1">FOODIES WELCOME HERE</h1>
        <p className="Header_p" style={{ margin: "2rem 0" }}>
          Something hot , Something tasty.Good food , Good mood.
          Food that makes you say wow.Low cost , High quality.
          Life is short , make it sweet.A taste you'll remember. 
        </p>
        <button type="button" className="Header_button">Explore Menu</button>
      </div>
      <div className="Header_img">
        <img src="/food.jpg" alt="food" />
      </div>
    </div>
  );
};

export default Header;
