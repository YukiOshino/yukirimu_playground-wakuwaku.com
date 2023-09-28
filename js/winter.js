let snows = [];

function preload() {
  img = loadImage("images/winter.png");
}

function setup() {
  let winter_view = createCanvas(1184, 617);
  winter_view.parent("winter_view")
    for(let i = 0; i < 5; i++) {
    snows[i] = new Circle();
  }
}

function draw() {
  image(img, 0, 0);
  
  if(frameCount % 30 == 0) {
    for (let i = 0; i < 5; i++) {
      snows.push(new Circle());
    }
  }
  
  for(let i = 0; i < snows.length; i++) {
    snows[i].move();
    snows[i].display();
  }
}

class Circle {
  constructor() {
    this.x = random(width);
    this.y = -30;
    this.ran = random(255);
    this.size = random(10, 50);
  }
  move() {
    this.x += noise(1) * floor(random(-1,1));
    this.y += noise(1) * 2;
  }
  display() {
    noStroke();
    fill(255, this.ran);
    ellipse(this.x, this.y, this.size);
  }
}