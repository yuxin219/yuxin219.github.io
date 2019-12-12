let bugs = [];
let amt = 1000;
let x=387;
let y=280;

function setup(){
var canvas=createCanvas(600,400);
canvas.position(150,450); 
for (let i = 0; i < amt; i++) {
    let rad = random(10, 40);

    let b = new Bug(x, y, rad);
    bugs[i] = b;
  }
}

function draw(){
background(26,26,26); 
fill(255); 
textSize(100);
textStyle(BOLD);
text('Smoking',100,330);
stroke(152,153,153);
fill(242, 242, 242);
rect(378.5,278,15,70);
fill(230, 153, 0);
rect(378.5,325,15,25);
    for (let i = 1; i < bugs.length; i++) {
    bugs[i].show();
    bugs[i].move();
    
    if( bugs[i].radius > 100 ) {
      bugs.splice(i, 1);
    }
  }
  let rad = random(3, 10);
  let b = new Bug(x, y, rad);
	bugs.push(b);
}
class Bug {
  constructor(tempX, tempY, tempRadius) {
    this.x = tempX;
    this.y = tempY;
    this.radius = tempRadius;
    this.color = color(random(80,100), 0.05);
  }

  show() {
    noStroke();
    fill(166,166,166,50);
    ellipse(this.x, this.y, this.radius);
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y - random(2);
    this.radius = this.radius + 0.3;
  }
}
