let count = 0;
let angle = 0;
let size1 = 0;
let size2 = 0;
let size3 = 0;
let size4 = 0;

function preload() {
  img = loadImage("images/firstview_bg.png");
}

function setup() {
  createCanvas(1184, 568);
}

function draw() {
  background(253, 255, 169);
  image(img, 0, 0);
  
  fill(255, 188, 204);
  noStroke();
  ellipse(520, 520, size1);
  fill(206, 249, 255);
  ellipse(570, 320, size2);
  fill(204, 132, 112);
  ellipse(800, 500, size3);
  fill(169, 181, 188);
  ellipse(680, 110, size4);
  
  size1 = 100 * cos(angle);
  size2 = 90 * cos(angle + 30);
  size3 = 80 * cos(angle + 60);
  size4 = 70 * cos(angle +90);
  angle += 0.01;
}