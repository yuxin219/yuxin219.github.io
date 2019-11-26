let snowflakes=[];
let e1,e2;
function setup(){//background
    createCanvas(600, 400);
    background(103, 196, 236);
    e1=new Eye(185,250,14);
    e2=new Eye(215,250,14);
}

function draw(){
background(103, 196, 236);
  let t = frameCount / 200; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    fill(255);
      snowflakes.push(new snowflake()); // append snowflake object
  }
// loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }    

//snowman's body   

e1.update(mouseX,mouseY);
e2.update(mouseX,mouseY);    
fill(255);
stroke(255);
ellipse(200,260,80,80);//head
ellipse(200,360,130,140);//body
e1.display();    
e2.display();
stroke(255);
fill(247,126,51);    
ellipse(200,260,10,12)//nose    
//huge snowman
fill(255);
stroke(255); 
ellipse(400,180,90,90);//head
ellipse(400,260,110,110);//upper body
ellipse(400,350,130,130);//lower body
push();    
strokeWeight(3);
stroke(0);    
line(360,230,290,260);//left    
line(315,248,310,270);    
line(315,248,300,235);
line(440,230,500,300);
line(482,280,488,305);    
line(482,279,505,285);
fill(0);
strokeWeight(1);    
ellipse(395,235,10,10);
ellipse(395,265,10,10);
ellipse(395,295,10,10);
ellipse(395,325,10,10);
ellipse(395,355,10,10);    
//eyes
fill(255);    
stroke(0);
strokeWeight(1.5);    
ellipse(410,170,16,16);    
ellipse(380,170,16,16);    
fill(0);    
ellipse(408,172,10,10);//right
ellipse(378,172,10,10);//left
fill(247,130,51);//nose
stroke(255);    
ellipse(395,185,10,12);    
fill(230, 0, 0);    
arc(397, 195, 50,40,0, PI);//mouth    
    
pop();        
push();
strokeWeight(3);
stroke(0);
line(150,325,125,280);//left arm
line(135,300,120,295);
line(135,300,140,285);
line(250,325,275,280);//right arm
line(265,300,280,295);
line(265,300,260,285);
//scarf
fill(244, 47, 26);
stroke(244, 47, 26);
strokeWeight(1);    
rect(170, 290,20, 50,3);
strokeWeight(1);   
rect(160, 280, 80, 20, 8);
strokeWeight(2);
line(172,330,172,355);
line(178,330,178,355);    
line(184,330,184,355);
line(188,330,188,355);   
pop(); 
//button
fill(0);    
ellipse(200,320,10,10);
ellipse(200,340,10,10);    
ellipse(200,360,10,10);    
ellipse(200,380,10,10);
strokeWeight(1.5);
textSize(40);
fill(64, 175, 238 );
text('WINTER',396,80);
fill(141, 214, 255 );
text('WINTER', 400,78);
    
}

function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function() {
    push();
    translate(this.x, this.y);
    stroke(0);
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(0);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };
}

function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}