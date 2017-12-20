import React from "react";
import "./SystemCard.css";

const SystemCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Generation:</strong> {props.generation}
        </li>
        <li>
          <strong>Release Year:</strong> {props.release}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeSystem(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default SystemCard;
