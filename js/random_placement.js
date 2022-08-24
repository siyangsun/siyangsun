// collect all the stars
var stars = document.getElementsByTagName('star');
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for (var i = 0; i < stars.length; i++) {

  // shortcut! the current star in the list
  var thisStar = stars[i];

  // get random numbers for each element
  randomTop = getRandomNumber(0, winHeight);
  randomLeft = getRandomNumber(0, winWidth);

  // update top and left position
  thisStar.style.top = randomTop + "px";
  thisStar.style.left = randomLeft + "px";
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {

  return Math.random() * (max - min) + min;

}
