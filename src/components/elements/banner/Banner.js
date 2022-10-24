import React from "react";
import "./Banner.css";

function Banner({ heading, description }) {
  return (
    <div className="banner">
      <div className="banner-heading">
        <h1>{heading}</h1>
      </div>
      <div className="banner-description">
        <span>{description}</span>
      </div>
    </div>
  );
}

export default Banner;
