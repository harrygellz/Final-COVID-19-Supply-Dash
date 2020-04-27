function Intro()
{
var player;
var gravity = 10;
var velocity = 5;
var supplies;
var score = 1;
var supplyIMG;
var supply;
var fr = 60;
var timer = 1;
var totalscore = (score - timer);

var radx = 200; // Width of the shape
var rady = 150;
var xpos, ypos; // Starting position of shape

var xspeed = 2.8; // Speed of the shape
var yspeed = 2.2; // Speed of the shape

var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom



this.preload = function() {
    townIMG = loadImage("assets/background1.png");
    witchdocIMG = loadImage("assets/plague doctor player.png");
    sidewalkIMG = loadImage("assets/gamesidewalk.png");
    housesIMG = loadImage("assets/housesbackground.png");
    toiletpIMG = loadImage("assets/tpvector.png");
    titleIMG = loadImage("assets/COVID-19title.png");
    maskIMG = loadImage("assets/mask.png");
    handsanIMG = loadImage("assets/handsan.png");
}

this.setup = function() {
  createCanvas(750, 450);
     frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
    frameRate(fr);
//Create suppliess, tp, and handsan sprites
    


//Create Player Sprite
  player = createSprite(
    0, 525, 40, 40);
 player.addImage(witchdocIMG);

//Create Ground Sprite
    noFill();
    groundspr = createSprite(
  0,  350, 9000, 0);
    
}

this.draw = function()
    {
      // image( this.sceneManager.bkImage, 0, 0);

   background(0,100,190);
    
//Camera controls & Constraints
    camera.position.x = constrain(player.position.x, 0, 4200);
    camera.position.y = 225;
    camera.zoom = 1.0;
    player.position.x = constrain(camera.position.x,0, 5500);
      
//Background vectors
    image(townIMG, -375, 0, 0, 0);
    fill(133,133,133);
    rect(-375,293,750,360);
    fill(0,255,0);
    rect(-375,300,5000,360);
    image(housesIMG, 100, -5, 0, 0);
    fill(255,0,0);
    rect(-375,335,5000,200);    
    image(sidewalkIMG, -375, 20, 0, 0);
    
    drawSprites();
//Title
        fill(255);
        textSize(62);
 if ( Math.floor(frameCount / 30) % 2 == 0 )    {
    text('Press Spacebar to Begin', -340,420);

    }
  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
        

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - radx || xpos < radx) {
    xdirection *= -1;
  }
  if (ypos > height - rady || ypos < rady) {
    ydirection *= -1;
  }

image(titleIMG, xpos -630, ypos- 180, 500, 300);
    
    }
 //image(titleIMG, -375, 0);  

 this.keyPressed = function()    {
    if (key == ' ')
      {
            this.sceneManager.showScene(Instruct, key);
     }
 }
}
