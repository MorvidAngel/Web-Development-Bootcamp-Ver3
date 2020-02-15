// create secretNumber
var secretNumber = 4;

// ask user for geuss
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check guess
if(guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}

// otherwise check if higher
else if(guess > secretNumber){
  alert("To high. Guess again!");
}

// other wise check if lower
else{
  alert("To low. Guess again!")
}

