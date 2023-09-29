let count1 = 0;
let angle = 0;
let size1 = 0;
let size2 = 0;
let size3 = 0;
let size4 = 0;

function preload() {
  img = loadImage("images/firstview_bg_sp.png");
}

function setup() {
  let firstview_sp = createCanvas(390, 813);
  firstview_sp.parent('firstviiew_sp');
}

function draw() {
  background(253, 255, 169);
  image(img, 0, 0);
  
  fill(255, 188, 204);
  noStroke();
  ellipse(335, 460, size1);
  fill(206, 249, 255);
  ellipse(230, 440, size2);
  fill(204, 132, 112);
  ellipse(340, 275, size3);
  fill(169, 181, 188);
  ellipse(90, 350, size4);
  
  size1 = 60 * cos(angle);
  size2 = 50 * cos(angle + 30);
  size3 = 45 * cos(angle + 60);
  size4 = 40 * cos(angle +90);
  angle += 0.01;
}