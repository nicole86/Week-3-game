
var words = ['kitten', 'opossum', 'tortoise', 'baboon', 'chameleon', 'anteater', 'buffalo', 'platypus', 'hippopotamus', 'weasel', 'vulture', 'rhinoceros', 'gorilla', 'seahorse', 'mouse'];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var answer = [];

var wins = 0;

var guesses = 0;

var word = "";


function chooseWord () {
   return words[Math.floor(Math.random() * words.length)];
}
    
function reset () {

	 for (var i = 0; i < word.length; i++){
    	answer[i] = '_';
	}

	guesses = 7;
	word = chooseWord();
}


function startGame () {

	document.onkeyup = guess;
	reset ();
}

function guess (event) {

	for(i=0; i < word.length(); i++) {

		if(event.key == word[i]) {
			answer[i] = word[i];
		} else {
			
		}
	}
}

