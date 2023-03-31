"use strict";

const btnSuit = document.querySelectorAll("input");
let bot = Math.trunc(Math.random() * 3) + 1;
let botChoice;
const displayUserPick = document.getElementById("user");
const displayBotPick = document.getElementById("bot");
const displayResult = document.getElementById("result");

function game() {
  for (let i = 0; i < btnSuit.length; i++) {
    btnSuit[i].addEventListener("click", function () {
      const userChoice = btnSuit[i].value;

      if (bot === 1) {
        botChoice = "gunting ✌";
      } else if (bot === 2) {
        botChoice = "batu ✊";
      } else if (bot === 3) {
        botChoice = "kertas 🖐";
      }

      displayUserPick.textContent = `Kamu memilih ${userChoice}`;
      displayBotPick.textContent = `Bot memilih ${botChoice}`;

      if (userChoice === botChoice) {
        displayResult.textContent = "Kamu seri boss🤨";
      } else if (userChoice === "gunting ✌") {
        if (botChoice === "kertas 🖐") {
          displayResult.textContent = "YEAYY, Kamu menang🎉";
        } else {
          displayResult.textContent = "Yahh, Kamu kalah😢";
        }
      } else if (userChoice === "batu ✊") {
        if (botChoice === "gunting ✌") {
          displayResult.textContent = "YEAYY, Kamu menang🎉";
        } else {
          displayResult.textContent = "Yahh, Kamu kalah😢";
        }
      } else if (userChoice === "kertas 🖐") {
        if (botChoice === "batu ✊") {
          displayResult.textContent = "YEAYY, Kamu menang🎉";
        } else {
          displayResult.textContent = "Yahh, Kamu kalah😢";
        }
      }
    });
  }
}

game();

document.querySelector("button").addEventListener("click", function () {
  bot = Math.trunc(Math.random() * 3) + 1;

  displayUserPick.textContent = "";
  displayBotPick.textContent = "";
  displayResult.textContent = "";

  game();
});
