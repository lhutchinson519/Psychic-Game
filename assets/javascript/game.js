

//First create the array list of options and variables
var computerChoice = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var wins=0;
var losses=0;
var guesses=9;
var guessesLeft=9;
var guessedLetters =[];


// Sets the computerGuess variable equal to a random choice from the computerChoice array.
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log("computer guess:" + computerGuess);

//function for when someone pushes a key
document.onkeyup = function(event){

	 var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	 console.log("guess:" + userGuess);

	 //check if guessed before
	 if(guessedLetters.indexOf(userGuess) == -1){
	 	console.log("not guessed");

	    guessesLeft--;
	    document.getElementById("guessesLeft").innerHTML = guessesLeft.toString();
	    console.log(guessesLeft);

	//add userGuess to guessed letter
		guessedLetters.push(userGuess);

	//updated htmlguessed with guessed letters
		document.getElementById("guessedLetters").innerHTML = guessedLetters.toString();


			if (guessesLeft > 0){
				console.log("guesses left");
			            if (userGuess == computerGuess){
			                wins++;
			                document.querySelector('#wins').innerHTML = wins;
			                alert("Yes, you are psychic!");
			                reset();
			            }
			            else{guesses--;}
			}

			else if(guessesLeft == 0){
				console.log("no guesses left");
		 // or we lose and update the html to display the loss 
			    losses++;
			       document.querySelector('#losses').innerHTML = losses;
			            alert("Sorry, you lose, maybe try again");
			 //reset. 
			       reset();}
	}
	 else{
	 	console.log("guessed");
	 }

}
//to reset
function reset() {
  //totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

document.getElementById("guessesLeft").innerHTML = guessesLeft.toString();
document.getElementById("guessedLetters").innerHTML = guessedLetters.toString();
}




