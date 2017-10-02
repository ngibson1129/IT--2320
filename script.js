var colorIndex = 0;
var colors = ["blue", "yellow", "green", "purple", "rgb(250, 175, 72)"];

window.onload = function()
{
	document.getElementById("circle").onclick = function() {
		this.style.background = colors[colorIndex];
		colorIndex++;
		if (colorIndex == colors.length) {
			colorIndex = 0;
		}
	}
}
//Thank you, Professor Santos
