import { categories } from './words.js';

let chosenCategory = "";
let chosenWord = "";
let displayedWord = [];
let wrongGuesses = 0;
const maxWrongGuesses = 6;

const categoryDisplay = document.getElementById("category-display");
const wordDisplay = document.getElementById("word-display");
const message = document.getElementById("message");
const letterButtons = document.getElementById("letter-buttons");
const wrongGuessesDisplay = document.getElementById("wrong-guesses");
const resetButton = document.getElementById("reset-button");

function initializeGame() {
    const categoryKeys = Object.keys(categories);
    chosenCategory = chosenCategory || categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
    const words = categories[chosenCategory];
    chosenWord = words[Math.floor(Math.random() * words.length)];
    displayedWord = Array(chosenWord.length).fill("_");
    wrongGuesses = 0;

    categoryDisplay.textContent = `Category: ${chosenCategory}`;
    wordDisplay.textContent = displayedWord.join(" ");
    wrongGuessesDisplay.textContent = wrongGuesses;
    message.textContent = "";

    letterButtons.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        const button = document.createElement("button");
        button.textContent = String.fromCharCode(i);
        button.onclick = handleGuess;
        letterButtons.appendChild(button);
    }
}

function handleGuess(event) {
    const guessedLetter = event.target.textContent.toLowerCase();
    event.target.disabled = true;

    if (chosenWord.includes(guessedLetter)) {
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === guessedLetter) {
                displayedWord[i] = guessedLetter;
            }
        }
        wordDisplay.textContent = displayedWord.join(" ");

        if (!displayedWord.includes("_")) {
            message.textContent = "You win!";
            disableButtons();
        }
    } else {
        wrongGuesses++;
        wrongGuessesDisplay.textContent = wrongGuesses;

        if (wrongGuesses >= maxWrongGuesses) {
            message.textContent = `Game over! The word was "${chosenWord}".`;
            disableButtons();
        }
    }
}

function disableButtons() {
    const buttons = letterButtons.querySelectorAll("button");
    buttons.forEach(button => (button.disabled = true));
}

resetButton.addEventListener("click", () => initializeGame());

initializeGame();
