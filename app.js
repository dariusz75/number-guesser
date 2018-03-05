//Games values
let min = 1;
let max = 10;
let guessesLeft = 3;
let randomNum = 5;

//UI elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

//Listener for quess
guessBtn.addEventListener('click', function(){
	let guess = parseInt(guessInput.value);

	if (!guess) {
		setMessage('Please entrer your number', 'red')
	} else if (guess < min || guess > max) {
		setMessage('Please entrer the number between ' + min +' and ' + max, 'green')
	} else if (guess && guess >= min && guess <= max) {

		if (guess == randomNum) {
			setMessage('You guessed the number! You won the game.');
		} else {
			guessed();
			setMessage('Your guess is ' + guess + '. You have ' + guessesLeft + ' guesses left.');
		}

		
		console.log(guess);
		console.log(guessesLeft);
		guess = guess;
		
	}
	
});

//Validation messages
function setMessage(messageText, messageColor) {
	message.textContent = messageText;
	message.style.color = messageColor;
}

function guessed() {

	guessesLeft = guessesLeft - 1;

}