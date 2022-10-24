import React from "react";
import "./Header.css";

function Header({ image }) {
  return (
    <div className="header">
      <div className="company">
        <div className="company-logo">
          <img src="/images/logo.png" />
        </div>
        <div className="company-name">
          <h2>Eden</h2>
        </div>
      </div>
      <div className="current-step">
        <img src={image} />
      </div>
    </div>
  );
}

export default Header;
