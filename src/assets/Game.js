import React, { useState } from "react";
import "./Game.css";
import { charactersCards, Card } from "./cards/Cards";
import Scoreboard from "./Scoreboard";
const Game = () => {
  const [characters, setCharacters] = useState(charactersCards());
  const [score, setScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [highestScore, setHighestScore] = useState(0);

  const shuffleCards = () => {
    let arr = [...characters];
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setCharacters(arr);
  };

  const addSelectedCard = (name) => {
    if (selectedCards.includes(name)) {
      setHighestScore(score);
      setScore(0);
      setSelectedCards([]);
    } else {
      increaseScore();
      setSelectedCards([...selectedCards, name]);
    }
    console.log(score);
  };

  const increaseScore = () => {
    setScore(score + 1);
  };

  return (
    <div id="game-container">
      <Scoreboard score={score} highest={highestScore} />
      <div id="gameboard">
        {characters.map((item) => {
          return (
            <Card
              name={item.name}
              image={item.image}
              key={item.name}
              shuffle={shuffleCards}
              addCard={addSelectedCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Game;
