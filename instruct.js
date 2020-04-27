function Instruct()
{

this.setup = function() {
  createCanvas(750, 450);
    background(0,100,190);
    
}

this.draw = function()
    {
      // image( this.sceneManager.bkImage, 0, 0);

   background(0,100,190);
    
    fill(255,0,0);
    rect(-375,335,5000,200);    
    
    fill(255);
    textSize(62);
    textAlign(CENTER, CENTER);
    
    text('Instructions:', 0, 50);
    textSize(25);
    rectMode(CENTER);
    text('-Collect the personal health supplies!', 0, 100, 600, 200);
    text('-Use up, right, and left keys to move player', 0, 140, 600, 200);
    text('-Player consumes 1 health item every day that passes', 0, 180, 650, 200);
    text('-Player begins with 1 health item', 0, 220, 600, 200);
    text('-If the politician catches you, you die', 0, 260, 600, 200);
    text('-If you run out of supplies, you die', 0, 300, 600, 200);
    
    textSize(62);
 if ( Math.floor(frameCount / 30) % 2 == 0 )    {
    text('Press X to Start', 0,395);

    }
    }
 //image(titleIMG, -375, 0);  

 this.keyPressed = function()    {
    if (key == 'x')
      {
            this.sceneManager.showScene(Game, key);
     }
 }
}
