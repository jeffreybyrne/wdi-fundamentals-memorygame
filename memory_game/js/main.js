//Array of cards
var cards = [
	{rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"},
	{rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png"},
	{rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png"},
	{rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png"}];

//Array of the cards currently in play
var cardsInPlay = [];

//Function to determine what the user selected
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src',cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}		
}

//Function to check if the selected cards are a match
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
		wins++;
		addScore('win');
	} else {
		alert('Sorry, try again.');
		losses++;
		addScore('loss')
	}
	
}

//Function to create a board
var createBoard = function() {
	for (i=0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//Function to reset the board, it clears the HTML of the current board, resets the cards in play, and creates a new board
var clearBoard = function() {
	var board = document.getElementById('game-board');
	board.innerHTML = '';
	cardsInPlay = [];
	createBoard();
}

//Adds a listener to the reset button to call the right function
var resetButton = document.getElementsByTagName('button');
resetButton[0].addEventListener('click', clearBoard);

//Initialize the board and start tracking game stats
createBoard();
var gameNumber = 1;
var wins = 0;
var losses = 0;
var currentScore = '0-0';
var scoreLocation = document.getElementById('score-location');
var score = document.getElementById('score');

//Function to determine the score after the end of a game
var addScore = function(outcome) {
	var scoreElement = document.createElement('li');
	scoreElement.textContent = 'Game ' + gameNumber + ' was a ' + outcome + '.';
	scoreElement.className = 'scoreList';
	scoreLocation.appendChild(scoreElement);
	score.textContent = 'Score: ' + wins + '-' + losses;
	gameNumber++;
}