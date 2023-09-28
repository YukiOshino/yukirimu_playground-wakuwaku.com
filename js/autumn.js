// let posx = [];
// let posy = [];
// let size = [];
let circles = [];
let circle_num = 3;
let particles = [];


function preload() {
  img = loadImage("images/autumn.png");
}

function setup() {
  let autumn_view = createCanvas(1184, 617);
  autumn_view.parent('autumn_view');
    
  for(let i = 0; i < circle_num; i++) {
    circles.push(new Circle());
  }
  // for(let i = 0; i < 30; i++) {
  //   if(i == 0) {
  //     posx[i] = 0;
  //     posy[i] = 0;
  //   } else {
  //     posx[i] = posx[i - 1] + random(0, 5);
  //     posy[i] = posy[i - 1] + random(0, 5);
  //   }
  //   size[i] = random(10, 30);
  // }
}

function draw() {
  background(255, 240, 220);
  image(img, 0, 0);
  // for(let i = 0; i < 30; i++) {
  //   fill(0,0,0)
  //   ellipse(posx[i], posy[i], size[i]);
  // }
    for(let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
    if(circles[i].cir_size >= circles[i].max_size) {
      
      particles.push(new Particle(circles[i].posX, circles[i].posY, circles[i].cir_size));
      circles.push(new Circle());
      circles.splice(i, 1);
    }
  }
  

  for(let j = 0; j < particles.length; j++) {
    particles[j].move();
    particles[j].display();
  }
} 

class Circle {
  constructor() {
    this.posX = random(width);
    this.posY = random(height);
    this.max_size = random(100, 400);
    this.cir_size = 0;
    this.weight = random(0.5, 1.5);
    this.speed = random(0.5, 2);
  }
  move() {
    if (this.cir_size < this.max_size) {
      this.cir_size += this.speed;
    }
  }
  display() {
    push();
    strokeWeight(this.weight);
    stroke(104, 42, 0);
    noFill();
    ellipse(this.posX, this.posY, this.cir_size);
    pop();
  }
}

class Particle {
  constructor(x, y, cir_size) {
    this.posX = x;
    this.posY = y;
    this.lifetime = 300;
    this.angle = 360 / 50;
    this.pos2 = cir_size;
    this.num = 1;
    this.transparency = 255;
  }
  move() {
      this.num += 0.008
      this.transparency -= 1
  }
  display() {
    fill(104, 42, 0, this.transparency);
    noStroke();
    for(let i = 0; i < 50; i++) {
      ellipse(this.posX + this.pos2 / 2 * cos(this.angle * i) * this.num, this.posY + this.pos2 / 2 * sin(this.angle * i) * this.num, 2);
    }
  }
}