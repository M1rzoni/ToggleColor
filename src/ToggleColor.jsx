import React, { useState } from "react";
import "./ToggleColor.css";

function ToggleColor() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
  };

  return (
    <>
      <div className="container" style={{ backgroundColor, color: textColor }}>
        <div className="btn-container">
          <button
            onClick={handleClick}
            style={{ buttonStyle, color: textColor }}
          >
            {buttonStyle === "white" ? "Dark Theme" : "White Theme"}
          </button>
        </div>
        <div className="h1-container">
          <h1>CHANGE YOUR THEME</h1>
        </div>
      </div>
    </>
  );
}

export default ToggleColor;
