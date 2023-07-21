import React from "react";

import "./Button.css";
// props
function Button({
  children,
  size = "medium",
  onClick = () => {
    console.log("default");
  },
  value = 40,
}) {
  return (
    <button type="button" className={`button ${size || ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
