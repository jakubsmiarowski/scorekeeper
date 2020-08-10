import React from "react";
import "./Player.css";

const Player = (props) => (
  <li className="Player">
    <span className="Player__name">{props.name}</span>
    <span className="Player__score">Score: {props.score}</span>
    <div className="Player__buttons">
      <span
        className="Player__button Button__plus"
        onClick={() => props.onPlayerScoreChange(1)}
      >
        +
      </span>
      <span
        className="Player__button Button__minus"
        onClick={() => props.onPlayerScoreChange(-1)}
      >
        -
      </span>
      <span className="Player__button" onClick={props.onPlayerRemove}>
        Remove Player
      </span>
    </div>
  </li>
);

export default Player;
