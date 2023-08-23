import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="aboutus app_bg flex_center section-padding" id="about">
      <div className="about-overlay flex_center">
        <img src="/Restaurant.png" alt="h" />
      </div>
      <div className="about_content flex_center">
        <div className="about_left">
          <h1 className="headtext">About Us</h1>

          <p className="about_p">
            A restaurant is a place where cooked
            food is sold to the public, and where people sit down to eat it. It
            is also a place where people go to enjoy the time and to eat a meal.
          </p>
          <button className="about_button" type="button">
            Know me
          </button>
        </div>
        <div className="about_knife flex_center">
          <img src="/knife.png" alt="about_knife" />
        </div>

        <div className="about_Right">
          <h1 className="headtext">Our History</h1>

          <p className="about_p">
            In Ancient Greece and Rome there were small restaurant-bars offering
            food and drinks.They were called thermopolia.
             Many dwellings did not have kitchens, and eating out
            was an important part of socializing.
          </p>
          <button className="about_button" type="button">
            Know me
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
