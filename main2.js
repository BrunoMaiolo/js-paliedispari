let userChoice = prompt("Choose even or odd")

let userNumber = Number(prompt("Choose a number from 1 to 5"));

function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

let computerNumber = getRandomNumber();
let sum = userNumber + computerNumber;

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


