let counter = 0;
const clickButton = document.getElementById("clickButton");
const counterDisplay = document.getElementById("counter");
clickButton.addEventListener("click", function () {
	counter++;
	counterDisplay.textCounter = counter;
})