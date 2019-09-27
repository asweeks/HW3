function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;
var x2 =0; //variable for tip of grass
var y2=0; //variable for tip of grass

function draw() {
  stroke(random(60, 70), 100, 90);
  x2 =x+random(-10, 10); //variables are assigned value
  y2=height-10-h;
  line(x, height-10, x2, y2); //variables used to draw grass
  noStroke();
  if (h>= 20){ // flowers grow after a certain height
    fill(41, 100, 100); //flower color
  ellipse(x2, y2, 5); //flower is drawn
  }

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (h>=40) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
