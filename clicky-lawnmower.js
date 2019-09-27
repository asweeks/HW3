function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;
var w = 5; //wind variable

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+w, height-10-h); //slant of grass is determined by w variable
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
    w+=5; // wind variable increases with height so slant the longer they get the more the blades are effected by wind
  }

  if (mouseIsPressed) { //grass is cut when mouse is pressed
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
    w=0;// wind resets to 0 everytime grass gets "cut"
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
