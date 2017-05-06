

//First create the array list of options and variables
var computerChoice = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var wins=0;
var losses=0;
var guesses=9;
var guessesLeft=9;
var guessedLetters =[];
var letterToGuess = null;

//hTML identifiers
var wins = document.getElementById("wins")
var losses = document.getElementById("losses")
var guessesLeft = document.getElementById("guessesLeft")
var soFar = document.getElementById("soFar")

//function for when someone pushes a key
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// Sets the computerGuess variable equal to a random choice from the computerChoice array.
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

//equaling the HTML 
var updateGuessLeft = function(){
	document.querySelector('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateletterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoice.length)];
};

var updateguessedLetters = function() { 
  document.querySelector('soFar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//to reset
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];


  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}


//making sure the choice is within the array in order to change the numbers on the page
  if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            // or we lose and update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you lose, maybe try again");
            //reset. 
            reset();
        };
}





