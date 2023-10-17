var numSquares = 6;
var colors = [];
var pickedColor;

var colorNames = [
  "Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Pink", "red","purpole"
];

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");

init();

function init() {
	colorDisplay.textContent = pickedColor;
	setupSquares();
	setupMode();
	reset();
}

resetButton.addEventListener("click", function() {
	reset();
});

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].textContent = colorNames[i]; // Display the color name
		squares[i].addEventListener("click", function() {
			var clickedColor = this.textContent;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again";
				changeColors(pickedColor);
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			}
		});
	}
}

function setupMode() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;
			}
			else {
				numSquares = 6;
			}
			reset();
		});
	}
}

function reset() {
	colors = genRandomColors(numSquares);
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#2C8E99";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) { 
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
			squares[i].textContent = colorNames[i]; 
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

function chooseColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colorNames[random];
}

function genRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}

function makeColor() {
	
	return colorNames[Math.floor(Math.random() * colorNames.length)];
}
