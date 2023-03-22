import React from "react";
import "./App.css";
import bg from "./assets/images/bgcharacters.png";
import Game from "./assets/Game";
import background from "./assets/images/background.png";

const App = () => {
  return (
    <div id="app" style={{ backgroundImage: `url(${background})` }}>
      <Game />
      <img src={bg} alt="" id="background-characters" />
    </div>
  );
};

export default App;
