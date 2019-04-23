import React from "react";
import "./style.css";

function Character(props) {
  return <div className="Character">{props.children}</div>;
}

export default Character;
