/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Globales
let inputs = document.querySelectorAll("input");
const nextCardButton = document.querySelector("#new_card");
const card = document.querySelector(".card");
const cardTypes = ["spade", "club", "heart", "diamond"];
const characters = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

// Funciones

const getRandomItem = anArray => {
  return anArray[Math.floor(Math.random() * anArray.length)];
};

const setClassRed = selector => {
  document
    .querySelectorAll(selector)
    .forEach(item => item.classList.add("red"));
};

const removeClassRed = selector => {
  document
    .querySelectorAll(selector)
    .forEach(item => item.classList.remove("red"));
};

const randomCard = ev => {
  let cardType = getRandomItem(cardTypes);
  let number = getRandomItem(characters);

  document.querySelectorAll(".icon span").forEach(item => {
    if (cardType == "heart") {
      setClassRed(".icon span");
      setClassRed(".number span");
      item.innerHTML = "♥";
    } else if (cardType == "diamond") {
      setClassRed(".icon span");
      setClassRed(".number span");
      item.innerHTML = "♦";
    } else if (cardType == "spade") {
      removeClassRed(".icon span");
      removeClassRed(".number span");
      item.innerHTML = "♠";
    } else if (cardType == "club") {
      removeClassRed(".icon span");
      removeClassRed(".number span");
      item.innerHTML = "♣";
    }
  });

  document.querySelector(".number span").innerHTML = number;
};

// Run

window.onload = randomCard;

nextCardButton.addEventListener("click", randomCard);

card.addEventListener("click", ev => {
  ev.currentTarget.classList.contains("card--rotated")
    ? ev.currentTarget.classList.remove("card--rotated")
    : ev.currentTarget.classList.add("card--rotated");
});

inputs.forEach(input =>
  input.addEventListener("input", ev => {
    let value = parseInt(ev.target.value);
    if (ev.target.id == "height" && value < 310) {
      alert("Minimun allowed height is 310px");
      value = 310;
      document.querySelector("#height").value = "320";
    }

    card.style[ev.target.id] = `${value}px`;
  })
);

setInterval(randomCard, 10000);
