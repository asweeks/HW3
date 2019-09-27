var x = 230;
var y = 220;
var grav =.5; //gravity variable
var s =3; //speed variable
var i2 = 5; //size of splash ellipse variable
//var n = .0000001;
//var r = .001;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);

  // draw drip
  ellipse(x, y, 10);
  
  
  // down 3 pixels each frame, but maybe should be accelerating?
  //y = (y+(r+exp(n)));
  //r = r+exp(n);
  y= y+(s+grav); //gravity is added to coordinate
  s= s+grav; //speed is increased each run
  if(y >= 380) {
  for( var i= 4; i<=6; i++){ //splash effect is added
    //var i2 = 5;
     ellipse(230, 390, i2, 10); //ellipse is drawn increasingly bigger
    i2++;
    
  }
  }

  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
    r =.001;
    s=3; //speed gets reset
    i2=5
  }
  
  
    
}
