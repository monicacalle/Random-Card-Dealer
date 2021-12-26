const suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
const numbers = [
  "A",
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
  "K",
];
function generateRandoSuitIndex() {
  return Math.floor(Math.random() * suits.length);
}

const randomSuit = suits[generateRandoSuitIndex()];

const topSuit = document.querySelector(".top-suit");
if (randomSuit == "&hearts;") {
  topSuit.style.color = "red";
}
if (randomSuit == "&diams;") {
  topSuit.style.color = "red";
}
topSuit.innerHTML = randomSuit;

const bottomSuit = document.querySelector(".bottom-suit");
if (randomSuit == "&hearts;") {
  bottomSuit.style.color = "red";
}
if (randomSuit == "&diams;") {
  bottomSuit.style.color = "red";
}
bottomSuit.innerHTML = randomSuit;

function generateRandomNumberIndex() {
  return Math.floor(Math.random() * numbers.length);
}

const randomNumber = numbers[generateRandomNumberIndex()];

const NewNumber = document.querySelector(".number");
NewNumber.innerHTML = randomNumber;
