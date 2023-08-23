import React from "react";
import { BiSearchAlt } from "react-icons/bi";

import "./Search.css";
const Search = () => {
  return (
    <div className="app_bg  app " id="search">
      <div className="s_app">
        <div className="s_img">
          <img src="/Restaurant.png" alt="" />
          <h2>Serach your favourite dish because good food,good mood.</h2>
        </div>
        <div className="s_search">
          <form action="" className="s_search_bar">
            <input type="text" placeholder="Search anything" name="search" />
            <button type="submit"><BiSearchAlt/></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
