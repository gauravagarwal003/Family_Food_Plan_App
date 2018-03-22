var string = "Hello! My name is Gaurav Agarwal. I am a programmer from Dublin, California. Welcome to my website!"; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',65); /* change 70 for speed */

}
frameLooper();