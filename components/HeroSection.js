import React from "react";
import { BsSearch } from "react-icons/bs";
import TopCategory from "./TopCategory";
const HeroSection = () => {
  return (
    <div className="herosection_main">
      <div>
        <h1>
          Your local source of high quality images <br></br>and videos directly
          from their creators
        </h1>
      </div>
      <div className="search_container">
        <input
          type="text"
          maxlength="12"
          placeholder="Search"
          className="searchbar"
        />
        <BsSearch className="search--icon" />
        <small>Recommended: summer, food, covid-19, real estate, love</small>
      </div>
    </div>
  );
};

export default HeroSection;
