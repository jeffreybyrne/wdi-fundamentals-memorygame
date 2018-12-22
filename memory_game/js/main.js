var cards = ['queen','queen','king','king'];
var cardsInPlay = [];





var flipCard = function(cardId) {
	// var cardOne = cards[3];
	// cardsInPlay.push(cardOne);
	// console.log('User flipped ' + cards[3]);

	// var cardTwo = cards[2];
	// cardsInPlay.push(cardTwo);
	// console.log('User flipped ' + cards[2]);
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}		
}

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else {
		alert('Sorry, try again.');
	}
}

flipCard(0);
flipCard(2);