import React from "react";
import chrollo from "../images/chrollo.png";
import gon from "../images/gon.png";
import feitan from "../images/feitan.png";
import hisoka from "../images/hisoka.png";
import illumi from "../images/illumi.png";
import shizuku from "../images/shizuku.png";
import netero from "../images/netero.png";
import leorio from "../images/leorio.png";
import killua from "../images/killua.png";
import kurapika from "../images/kurapika.png";
import "./Cards.css";
const cards = [
  {
    name: "Gon",
    image: gon,
  },
  {
    name: "Killua",
    image: killua,
  },
  {
    name: "Feitan",
    image: feitan,
  },
  {
    name: "Netero",
    image: netero,
  },
  {
    name: "Kurapika",
    image: kurapika,
  },
  {
    name: "Leorio",
    image: leorio,
  },
  {
    name: "Illumi",
    image: illumi,
  },
  {
    name: "Shizuku",
    image: shizuku,
  },
  {
    name: "Chrollo",
    image: chrollo,
  },
  {
    name: "Hisoka",
    image: hisoka,
  },
];

export const charactersCards = () => {
  return cards;
};

export const Card = (props) => {
  const handleClick = () => {
    props.addCard(props.name);
    props.shuffle();
  };

  return (
    <div className="character-card" onClick={handleClick}>
      <img src={props.image} alt={props.name} className="character-image" />
      <h3>{props.name}</h3>
    </div>
  );
};
