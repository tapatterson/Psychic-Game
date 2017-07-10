prompt("Guess what letter Im thinking of");
		// Creates an array that lists all of the options.
		var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		// Cretes a variable that keeps track of the number of wins and losses.

		var wins = 0;
		var losses = 0;
// This function runs whenever the user presses a key.
		document.onkeyup = function(event){
				// Determines which key was pressed.
			var userGuess = (event.keyCode).toLowerCase();
			
			// Randomly chooses a choice from the options array. This is the Computer's guess.
      		var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

			//This logic will determine the outcome of the game.
			if userGuess === computerGuess{
				wins++;
			}
			else if userGuess<computerGuess{
				losses++;
			}
			else if userGuess>computerGuess{
				losses++;
			}

			// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses.

        	var html =
         	 "<p>You chose: " + userGuess + "</p>" +
         	 "<p>The computer chose: " + computerGuess + "</p>" +
         	 "<p>wins: " + wins + "</p>" +
         	 "<p>losses: " + losses + "</p>"; 

          // Set the inner HTML contents of the #game div to our html string
        	document.querySelector("#game").innerHTML = html;
      	}


		function refresh(){
		location.reload();
	}