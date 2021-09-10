import React from "react";
import { Button } from "src/components/Button";
import "src/style/TopBackground.css";

function TopBackground() {
  return (
    <div className="hero-container">
      <video src="static/videos/bg3.mp4" autoPlay loop muted />
      <h1>SUPER VIP TOOL</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          WATCH DEMO
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          BUY NOW <i className="fas fa-shopping-cart" />
        </Button>
      </div>
    </div>
  );
}

export default TopBackground;
