$(document).ready(function($) {

	//Defaults
	//Set opponent to computer unless otherwise told
	var opponent = 'computer';//Change to COMPUTER

	//Make (X) the first play
	var symbol = 'X';

	//Store available plays
	var emptySpots = [];

	//Set true if anyone wins
	var victory = false;

	//Variables to hold score
	var myScore = 0;
	var oppScore = 0;

		
	//Function to start new game
		function newGame() {
			//Iterates through all spots and adds them to the array if the spot is empty
			for (var rowIndex = 1; rowIndex <=3; rowIndex++) {
				for (var columnIndex = 1; columnIndex <= 3; columnIndex++){
					var divName2 = '#cell-'+rowIndex+'-'+columnIndex;

					//Add empty spots to the array
					if($('#board').find(divName2).text() == ''){ 
						emptySpots.push(divName2);
					}
					else{
						alert("Tied")
					}
					//Start new game
					$(divName2).text('');
					victory = false;
				}
			}
		}

	newGame();

	//Function to X or O to the grid
		function setPlay(symbol,clickedDiv) {
			//Check if the div is empty
			if ($(clickedDiv).text()=='') {
				//If no one won
				if (!victory) {
					//Add the players play(X or O) to the div
					var div = "<div class=" + symbol +">" + symbol + "</div>";
					$(clickedDiv).append(div);
					victory = false;
					checkVictory(symbol);
				}
				else{
					//Set victory back to false and start a new game
					victory = false;
					newGame();
				}
				//Remove play from the array
				//Get the location in the array at the spot the user played
				var location = emptySpots.indexOf($(clickedDiv).attr("id"));

				//Remove played div from the array
				emptySpots.splice(location,1);
			}			
		}	

	//When user changes opponents
	$("#oppBtn").on('click', function(event) {
		//Prevent default click action
		event.preventDefault();

		//Change text from computer to player vice versa
		if($(this).text() == 'Computer(O)'){
			$(this).text('Player(O)');
			opponent = 'human';
		} 
		else{
			$(this).text('Computer(O)');
			opponent='computer';
		}
	});

	//Add Score when user won
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

	//TODO: RESET BOARD AFTER SOMEONE WON
	function checkVictory(player){
		function checkCell(cell1,cell2,cell3) {
			//If cell isn't empty
			if ($('#board').find("#"+cell1).text() !== '') {
				if ($('#board').find("#"+cell1).text() == $('#board').find("#"+cell2).text()) {
					if ($('#board').find("#"+cell2).text() == $('#board').find("#"+cell3).text()) {
						addScore(player);
						victory = true;
						console.log(player + " won")
					}
				}
			}
			//Add score for the player that won

			//Set victory to true
		}
		//Top row check
		checkCell("cell-1-1","cell-1-2","cell-1-3");
	}

	function aiPlay(){
		//Random spot where the user should play
		var randomDiv = emptySpots[Math.floor(Math.random() * emptySpots.length)];
		setPlay("O", randomDiv);		
	}

	//When user clicks a spot to play
	$('.board_cell').click(function(event) {
		var div = $(this);
		//If clicked spot is empty
		if ($(this).children().length < 1){
			if (opponent=='human') {
				setPlay(symbol,div);
				(symbol == 'O') ? symbol='X' : symbol = 'O';
			}
			else{
				setPlay(symbol,div);
				aiPlay();
			}
			
		}

		else{}
	});

});