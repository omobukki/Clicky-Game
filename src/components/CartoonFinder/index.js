import React from "react";
import "./style.css";

function CartoonFinder(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => props.clickFriend(props.id)} alt={props.id} src={props.image} />
      </div>
    </div>
  );
}

export default CartoonFinder;
