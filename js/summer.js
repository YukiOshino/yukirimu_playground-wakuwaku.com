let circles = [];
let colorlist = [[255, 200], [137, 195, 235, 200]];

function preload() {
  img = loadImage("images/summer.png");
}

function setup() {
  let summer_view = createCanvas(1184, 617);
  summer_view.parent('summer_view')
  for(let i = 0; i < 10; i++) {
    circles[i] = new Circle();
  }
  console.log("k");
}

function draw() {
  image(img, 0, 0);
  for(let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
}

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.addX = random(-1, 1);
    this.addY = random(-1, 1);
    this.size = random(30, 200);
    this.colorful = colorlist[floor(random(2))];
  }
  move() {
    this.x += this.addX;
    this.y += this.addY;
    if(this.x < 0 || this.x > width) {
      this.addX *= -1;
    }
    if(this.y < 0 || this.y > height) {
      this.addY *= -1;
    }
  }
  display() {
    noStroke();
    fill(this.colorful);
    ellipse(this.x, this.y, this.size);
  }
}