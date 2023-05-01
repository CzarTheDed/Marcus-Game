var loader = document.getElementById('preLoader');
const okay = document.getElementById('yes')
okay.addEventListener("click", function () {
	loader.style.display = "none";
});

const instruction = document.getElementById('headerBtn');
const instructionDiv = document.getElementById('instructionDiv')
instruction.addEventListener('click', function () {
	instructionDiv.classList.toggle('active');
});

const about = document.getElementById('aboutGame');
const aboutDiv = document.getElementById('instructionDiv');
about.addEventListener('click', function () {
	aboutDiv.classList.toggle('active');
	aboutDiv.textContent = "I decided to call this game 'AgCom' just like an abbreviation of Against Computer";
});


// a javascript function to return Scissors, Rock and Paper;
let player1 = "human"
let player2 = "computer"
let myScore = document.getElementById("my_score")

let comScore = document.getElementById("com_score")
	
let placeholder = document.getElementById("placeholder")
let paper = document.getElementById("Paper")
let rock = document.getElementById("Rock")
let scissors = document.getElementById("Scissors")

let choiceArray = [ "paper" , "rock", "scissors"]



function paperBtn() {
	let randomChoice = choiceArray[(Math.floor(Math.random() * (choiceArray.length)))]
		if (randomChoice === choiceArray[0]) {
		console.log("tie")
	} 	if (randomChoice === choiceArray[1]) {
		console.log("you win");

		myScore.textContent ++
	} else {
		console.log("you lose");
		comScore.textContent ++
	}

}

function rockBtn() {
	let randomChoice = choiceArray[(Math.floor(Math.random() * (choiceArray.length)))]
		if (randomChoice === choiceArray[0]) {
		console.log("you lose")
		comScore.textContent ++

	} 	if (randomChoice === choiceArray[1]) {
		console.log("tie");

		
	} else {
		console.log("you win");
		myScore.textContent ++
	}
}

function scissorsBtn() {
	let randomChoice = choiceArray[(Math.floor(Math.random() * (choiceArray.length)))]
		if (randomChoice === choiceArray[0]) {
		console.log("you win")
		myScore.textContent ++
	} 	if (randomChoice === choiceArray[1]) {
		console.log("you lose");
		comScore.textContent ++
		
	} else {
		console.log("tie");
		
	}
}


	
	
