function Game(){
var player;
var gravity = 10;
var velocity = 5;
var supplies;
var score = 2;
var fr = 60;
var timer = 1;
var man;

this.preload = function () {
    townIMG = loadImage("assets/background1.png");
    witchdocIMG = loadImage("assets/plague doctor player.png");
    sidewalkIMG = loadImage("assets/gamesidewalk.png");
    housesIMG = loadImage("assets/housesbackground.png");
    toiletpIMG = loadImage("assets/tpvector.png");
    titleIMG = loadImage("assets/COVID-19title.png");
    maskIMG = loadImage("assets/mask.png");
    handsanIMG = loadImage("assets/handsan.png");
    politicianIMG = loadImage("assets/politician.png")
}

this.setup = function() {
    createCanvas(750, 450);
    frameRate(fr);
    
//Create suppliess, tp, and handsan sprites
    supplies = new Group();
    x= 170;
    for (var i = 0; i < 50; i++) {
    var c = createSprite(x, 280, 20, 20);
      x+= 285;
    c.addImage(maskIMG);
    supplies.add(c);
    var d = createSprite(x, 280, 20, 20);
      x+= 285;
    d.addImage(toiletpIMG);
    supplies.add(d);
    var e = createSprite(x, 280, 20, 20);
      x+= 285;
    e.addImage(handsanIMG);
    supplies.add(e);
    var d = createSprite(x, 280, 20, 20);
      x+= 285;
    d.addImage(toiletpIMG);
    supplies.add(d);
  }

//Create Player Sprite
    player = createSprite(0, 325, 40, 40);
    player.addImage(witchdocIMG);

//Create Ground Sprite
    noFill();
    groundspr = createSprite(
  0,  350, 9000, 0);
    
//Politician sprite
    man = createSprite(-200, 320, 40, 40);
    man.attractionPoint(3.5, player.position.x, 320);
    man.addImage(politicianIMG);
}

this.draw = function() {
    background(0,100,190);
    
//Camera controls & Constraints
    camera.position.x = constrain(player.position.x, 0, 4200);
    camera.position.y = 225;
    camera.zoom = 1.0;
    player.position.x = constrain(camera.position.x,0, 5500);
      
//Background vectors
    image(townIMG, -375, 0, 0, 0);
    fill(133,133,133);
    rect(-375,293,5000,360);
    fill(0,255,0);
    rect(-375,300,5000,360);
    image(housesIMG, 100, -5, 0, 0);
    fill(255,0,0);
    rect(-375,335,5000,200);    
    image(sidewalkIMG, -375, 20, 0, 0);
    
//Display game statistics
    push();
    fill(255);
    textSize(62);
    text("Days:", player.position.x - 370, 80);
    text(timer, player.position.x - 200, 80);
    //text("Supplies left:", player.position.x - 370, 420);
    
    if (frameCount % 180 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer ++;
  }
    
//gravity
   player.velocity.y = gravity;
    
// Keyboard Controls
  if (keyIsDown(LEFT_ARROW)) {
    player.position.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
     player.position.x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
     player.position.y -= 15;
      player.velocity.y = 5; 
  }

//Ground collide
    player.collide(groundspr);
    
 //Collision callback
    player.overlap(supplies, getCoin);
    drawSprites();
    fill(255);
    noStroke();
    textSize(72);
    textAlign(0, 100);
    if (supplies.length > 0) {
    text("Supplies left: " + (score - timer), player.position.x - 250, 425);
}
    pop();
    
  //Gameover
    if (timer > score) { this.sceneManager.showScene( GameOver );
        }
    if (player.position.x <= man.position.x) { this.sceneManager.showScene( GameOver );
        }
    if (player.position.x >= 4200) { this.sceneManager.showScene( Game2 );
        }
}

//collision scoring system
function getCoin(player, supplies) {
  supplies.remove();
  score += 1;

}

//keep score
this.getScore = function()
    {
        return score;
    }

this.getTime = function()
    {
        return timer;
    }
}