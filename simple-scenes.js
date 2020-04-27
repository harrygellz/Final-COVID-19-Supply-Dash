let scene = "start"; // set initial scene

function setup() {
  createCanvas(400, 400);
  fill(255);
  textAlign(CENTER);
  textSize(38);
}

function draw() {
/* draw only contains the logic of executing 
different scenes as functions based on the value of the scene variable */
  if (scene == "start"){
    start();
    
  }
  if (scene == "game"){
    scene1();
    
  }
  if (scene == "end"){
    scene2();
  }
  
}

function start(){ // start screen
  background('red');
  text("Press SPACE to Start", width/2, height/2);  
  if (keyIsDown(32)){ // 32 is keycode for Spacebar
    scene = "game";
  }
 }

function scene1(){ // game
  background('blue');
  text("scene1", width/2, height/2);
  fill(255,0,0);
  let targetX = 30;
  let targetY = 30;
  let radius = 50;
  let target = ellipse(targetX, targetY, radius, radius);
  fill(255);
  let player = ellipse(mouseX, mouseY, radius, radius);
  
  // simple collision detection
  // checks if distance between 
  let distance = dist(targetX,targetY,mouseX,mouseY);
  if (distance < radius){
    scene = "end";
  }
}

function scene2(){ // end screen
  background(0);
  textSize(50);
  text("You Win!", width/2, height/2);
  textSize(24);
  text("ESC to play again", width/2, height/2+50);
  if (keyIsDown(ESCAPE)){
    scene = "start";
  }
}

