// Rock Paper Scissors With Switch Statement

let playerInput = prompt("Choose One Of Rock, Paper Or Scissors");
let choice = playerInput.toLowerCase();
let player = choice.trim();

let computerChoice = Math.floor(Math.random() * 3);
let computer;
if (computerChoice === 1) {
	computer = "rock";
} else if (computerChoice === 2) {
	computer = "paper";
} else {
	computer = "scissors";
}

let result;

switch (player) {
	case computer:
		result = "Tie Game";
		break;
	case "rock":
		if (computer === "paper") {
			result = "Computer Wins";
		} else {
			result = "You Won";
		}
		break;
	case "paper":
		if (computer === "scissors") {
			result = "Computer Wins";
		} else {
			result = "You Won";
		}
		break;
	case "scissors":
		if (computer === "rock") {
			result = "Computer Wins";
		} else {
			result = "You Won";
		}
		break;
	default:
		result = "Wrong Input!!!";
}

console.log(result);
alert(result);
console.log("Your Choice Is ", player);
// alert(player);
console.log("Computer's Choice Is ", computer);
// alert(computer);
