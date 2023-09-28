let x = 0;
let y = 400;
let a = 0;
let angle = 0;
let triangles = [];

function preload() {
  img = loadImage("images/spring2.png");
}

function setup() {
  let spring_view = createCanvas(1184, 617);
  spring_view.parent('spring_view');
  for(let i = 0; i < 5; i++) {
    triangles[i] = new Triangle();
  }
  console.log("f")
}

function draw() {
  ellipse(x, y, 1);
  x += 1;
  angle = noise(a) ;
  a += 0.1;
  y = 100 * cos(angle);
    background(255, 248, 224);
  image(img, 0, 0);
  // rect(angle,angle ,angle,angle);
  // for(let i = 0; i < 10; i++) {
  //   push();
  //   translate(100, 100);
  //   rotate(angle);
  //   ellipse(100, 100, 200, 50);
  //   pop();
 // }
  
  for(let i = 0; i < triangles.length; i++) {
    push();
    triangles[i].display();
    triangles[i].move();
    pop();
  }
}

class Triangle {
  constructor() {
    this.tri_size = random(20, 70)
    this.posX = random(303, width - 181);
    this.posY = random(height);
    this.angle1 = 0;
    this.rotation = random(0.005, 0.01);
    this.angle2 = 0;
    this.ran2 = 
      0.007;
  }
  move() {
    this.angle1 += this.rotation;
    this.angle2 += this.ran2;
  }
  display() {
    noFill();
    strokeWeight(2);
    //stroke(225, 106, 204);
    stroke(255, 188,  204);
    translate(this.posX, this.posY + this.tri_size);
    rotate(this.angle1);
    for(let j = 0; j < 10; j++) {
      rotate(this.angle2);
    
      //triangle(0, - this.tri_size, - this.tri_size, this.tri_size / 2, this.tri_size, this.tri_size / 2);
      ellipse(0, -this.tri_size, 50, 100)
    }
  }
}