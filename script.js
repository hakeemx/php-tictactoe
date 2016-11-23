$(document).ready(function() {
	//Variables

	//Default symbol
	var symbol = "X";

	//Set opponent to computer by default
	var opponent = 'computer';

	//Array containing available(empty) divs
	var emptySpots = [];

	//Set true if someone wins
	var victory = false;

	//Variables to hold user scores
	var myScore = 0;
	var oppScore = 0;

	//Functions
		//Function that launches when a new game is created
		function newGame() {
			//Iterate through every cell on the board
			for (var rowIndex = 1; rowIndex <=3; rowIndex++) {
				for (var columnIndex = 1; columnIndex <= 3; columnIndex++){
					var selectedDiv = '#cell-'+rowIndex+'-'+columnIndex;

					//Clear board and Start new game
					$(selectedDiv).text('');

					//Check if spot is empty and if so add it to the array list
					if($('#board').find(selectedDiv).text() == ''){ 
						emptySpots.push(selectedDiv);
					}
				}
			}
		}

		newGame();

		//Function to increment score when user won
		function addScore(player) {
			if(player == 'X'){
				myScore+=1;
				$("#playerScore").text(myScore)
			}  
			else{
				oppScore+=1;
				$("#oppScore").text(oppScore)
			}
		}

		//After play check to see if someone won
		function checkVictory(player){
			function checkCell(cell1,cell2,cell3) {
				//If cell isn't empty
				if ($('#board').find("#"+cell1).text() !== '') {
					if ($('#board').find("#"+cell1).text() == $('#board').find("#"+cell2).text()) {
						if ($('#board').find("#"+cell2).text() == $('#board').find("#"+cell3).text()) {
						//Uncomment to add score
							addScore(player);
							victory = true;
							console.log(player + " won")
							//Change symbol color when player won

						}
					}
				}
				//Add score for the player that won

				//Set victory to true
			}
			//Top row check
			checkCell("cell-1-1","cell-1-2","cell-1-3");
			//Middle row check
			checkCell("cell-2-1","cell-2-2","cell-2-3");
			//Bottom row check
			checkCell("cell-3-1","cell-3-2","cell-3-3");
			//Vertical left check
			checkCell("cell-1-1","cell-2-1","cell-3-1");
			//Vertical middle check
			checkCell("cell-1-2","cell-2-2","cell-3-2");
			//Vertical right
			checkCell("cell-1-3","cell-2-3","cell-3-3");
			//Diagonal down
			checkCell("cell-1-1","cell-2-2","cell-3-3");
			//Vertical up
			checkCell("cell-3-1","cell-2-2","cell-1-3");

		}

		function setPlay(symbol,div) {
			//If cell is empty
			if ($(this).children().length < 1) {
				//If nobody won continue playing
				if (!victory) {
					//Get clicked div
					var symbolDiv = "<div class=" + symbol +">" + symbol + "</div>";

					//Append symbol to the div
					$(div).append(symbolDiv);
				}
				else{
					//Set victory back to false and start a new game
					victory = false;
					newGame();
				}

			}
			else{
				
			}
			
			//Remove current div from the empty spot array
			//Get the location in the array at the spot the user played
			var location = emptySpots.indexOf("#"+ $(div).attr("id"));

			//Remove played div from the array
			emptySpots.splice(location,1);

			//Play sound when done making a play
			// var audio = new Audio('sounds/circle.wav');
			// audio.play();

			checkVictory(symbol);
		}

		//Function for the computer AI
		function aiPlay() {
			//Get available divs
			var randomDiv = emptySpots[Math.floor(Math.random() * emptySpots.length)];
			//If div is not empty rerun the function
			if ($(randomDiv).text()!=='') {
				aiPlay();
			}
			else{
				setPlay("O", randomDiv)
				console.log($(randomDiv).text())
			}
			
		}


	//Events

		//Tic tac board cell click
		$('.board_cell').click(function() {
			var div = $(this);
			//If cell is not empty
			if ($(this).children().length >= 1) {

			}

			//If cell is empty
			if ($(this).children().length < 1) {
				//Make play
				//If playing human
				if (opponent=='human') {
					setPlay(symbol,div);
					//After done playing swap symbol
					if(symbol == 'O'){
						symbol='X'
					}
					else symbol = 'O';
				}

				//If playing AI
				if (opponent=='computer') {
					//Make my move
					setPlay(symbol,div)

					//Computer makes its move
					aiPlay();
				}
			}

		});


		//Opponent button click(changes opponents on click)
		$('#oppBtn').click(function() {	
			newGame();		
			if ($(this).text()=='Computer(O)') {
				//Change text to human and set opponent to human
				$(this).text('Player(O)');
				opponent='human';
			}
			else{
				//Change text to computer and set opponent to computer
				$(this).text('Computer(O)');
				opponent='computer';
			}
		});


});