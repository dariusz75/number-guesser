//Games values
let min = 1;
let max = 10;
let guessesLeft = 3;
let randomNum = Math.floor((Math.random() * 10) + 1);

//UI elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');
const newGame = document.querySelector('.new-game-button');

minNum.textContent = min;
maxNum.textContent = max;

//Listener for quess
guessBtn.addEventListener('click', function(){
	let guess = parseInt(guessInput.value);

	if (!guess) {
		setMessage('Please entrer your number', 'red')
	} else if (guess < min || guess > max) {
		setMessage('Please entrer the number between ' + min +' and ' + max, 'red')
	} else if (guess && guess >= min && guess <= max) {
		guess = guess;

		if (guess == randomNum) {
			setMessage('YOY WON! Please start a new game.', 'green');
			disableButton();
		} else if (guessesLeft > 0) {
			guessed();
			setMessage('Your guess is ' + guess + '. You have ' + guessesLeft + ' guesses left.', 'black');

			if (guessesLeft === 0) {
			disableButton();
			setMessage('You have no more guesses left! Please start a new game', 'red');
		}
		} 
		
	}
	
});


//Listener for resetting the game
newGame.addEventListener('click', function() {
	location.reload();
});


//Validation messages
function setMessage(messageText, messageColor) {
	message.textContent = messageText;
	message.style.color = messageColor;
}

function guessed() {
	guessesLeft = guessesLeft - 1;
}

function disableButton() {
	guessBtn.classList.add("disabled");
	guessBtn.disabled = true;
}

console.log('The winning number is ' + randomNum);