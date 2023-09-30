let count1_sp = 0;
let angle_sp = 0;
let size1_sp = 0;
let size2_sp = 0;
let size3_sp = 0;
let size4_sp = 0;

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
  ellipse(335, 460, size1_sp);
  fill(206, 249, 255);
  ellipse(230, 440, size2_sp);
  fill(204, 132, 112);
  ellipse(340, 275, size3_sp);
  fill(169, 181, 188);
  ellipse(90, 350, size4_sp);
  
  size1_sp = 60 * cos(angle_sp);
  size2_sp = 50 * cos(angle_sp + 30);
  size3_sp = 45 * cos(angle_sp + 60);
  size4_sp = 40 * cos(angle_sp +90);
  angle_Sp += 0.01;
}