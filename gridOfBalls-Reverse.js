function setup() {
  createCanvas(400, 400);
}

// track the circle to draw next frame
var x = 25;
var y = 25;
var d = 1; //direction Variable

function draw() {
  colorMode(HSB);
  stroke(255);

  // draw circle with random hue
  fill(random(360), 100, 100);
  ellipse(x, y, 20);

  // set up next circle
  if (d >= 0) { //moves circle based on direction
    x = x + 25;
  }
  if (d < 0) {
    x = x - 25;
  }

  // if we hit the right edge, go down a line
  if (x > width - 25) {
    if (d >= 0) {
      x = 25;
      y = y + 25;
    }
  }
  if (x <= 0) {
    if (d < 0) {
      x = 375;
      y = y - 25;
    }
  }


  // if we hit the bottom edge, reset to top
  if (y == 375 && x == 375) { //when reaches bottom changes direction
    //y= 25;

    d *= -1;
  }
  if (y == 25 && x == 25) { //when reaches top changes direction
    d *= -1;
  }
}
