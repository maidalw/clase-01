var a = 50;
var c;
function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  //background(0,100,100);
  fill(random(0,40),100,100);
  noStroke();
  
  ellipse(mouseX,mouseY,c,c);
  /*
  comentario
  más
  largo
  */
}