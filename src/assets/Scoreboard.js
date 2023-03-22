import React from "react";

const Scoreboard = (props) => {
  return (
    <div id="scoreboard">
      <h1>Score: {props.score}</h1>
      <h1>Highest Score: {props.highest}</h1>
    </div>
  );
};

export default Scoreboard;
