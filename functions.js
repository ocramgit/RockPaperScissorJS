const object = document.getElementsByClassName("object");
const winner = document.getElementById("winner");
const computerChoiceInput = document.getElementById("computerChoiceInput");
const userChoiceInput = document.getElementById("userChoiceInput");

for (let i = 0; i < object.length; i++) {
  object[i].addEventListener("click", () => {
    let userChoice = object[i].value;
    let computerChoice = object[getRandomInt()].value;
    if (
      (computerChoice == "paper" && userChoice == "scissors") ||
      (computerChoice == "scissors" && userChoice == "rock") ||
      (computerChoice == "rock" && userChoice == "paper")
    ) {
      winner.textContent = "WINNER: User";
      userChoiceInput.textContent = "USER CHOICE: " + userChoice;
      computerChoiceInput.textContent = "COMPUTER CHOICE: " + computerChoice;
    } else if (userChoice == computerChoice) {
      winner.textContent = "WINNER: Nobody | DRAW";
      userChoiceInput.textContent = "USER CHOICE: " + userChoice;
      computerChoiceInput.textContent = "COMPUTER CHOICE: " + computerChoice;
    } else {
      winner.textContent = "WINNER: Computer";
      userChoiceInput.textContent = "USER CHOICE: " + userChoice;
      computerChoiceInput.textContent = "COMPUTER CHOICE: " + computerChoice;
    }
  });
}

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}
