import React from "react";

import "./style.module.css";

const Card = (props) => (
  <div>
    <h2>{props.tod.title}</h2>
    <p>{props.tod.body}</p>
  </div>
);

export default Card;
