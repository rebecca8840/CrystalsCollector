$(document).ready(function() {

var Random = Math.floor(Math.random() * 101+19)

$ ("#randomNumber").text(Random);


// variables


var numOne = Math.floor(Math.random() * 11+1)

var numTwo = Math.floor(Math.random() * 11+1)

var numThree = Math.floor(Math.random() * 11+1)

var numFour = Math.floor(Math.random() * 11+1)

var userTotal = 0

var wins = 0

var losses = 0

// reset

$("#numWins").text(wins);

$("#numLosses").text(losses);


function reset() {

	Random = Math.floor(Math.random() * 101+19);

	console.log("Confirmation that this works");

	$ ("#randomNumber").text(Random);

	numOne = Math.floor(Math.random() * 11+1)

	numTwo = Math.floor(Math.random() * 11+1)

	numThree = Math.floor(Math.random() * 11+1)

	numFour = Math.floor(Math.random() * 11+1)

	userTotal = 0;
}

// adding wins 

function win() {

  wins++; 

  $("#numWins").text(wins);

  reset();

}

// adding losses

function lose() {

  losses++;

  $("#numLosses").text(losses);

  reset()
}

//jewel click

$("#purple").on("click", function() {

	userTotal = userTotal + numOne;

	console.log("New userTotal = " + userTotal);

	$("#finalNumber").text(userTotal);

		if (userTotal === Random) {
			win();
		}

		else if (userTotal > Random) {
			lose();
		}
})


$("#blue").on("click", function() {

	userTotal = userTotal + numTwo;

	console.log("New userTotal = " + userTotal);

	$("#finalNumber").text(userTotal);

		if (userTotal === Random) {
			win();
		}

		else if (userTotal > Random) {
			lose();
		}
})


$("#pink").on("click", function() {

	userTotal = userTotal + numThree;

	console.log("New userTotal = " + userTotal);

	$("#finalNumber").text(userTotal);

		if (userTotal === Random) {
			win();
		}

		else if (userTotal > Random) {
			lose();
		}
})


$("#clear").on("click", function() {

	userTotal = userTotal + numFour;

	console.log("New userTotal = " + userTotal);

	$("#finalNumber").text(userTotal);

		if (userTotal === Random) {
			win();
		}

		else if (userTotal > Random) {
			lose();
		}
})






// end parantheses 
});