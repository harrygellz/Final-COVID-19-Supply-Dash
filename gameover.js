function GameOver()
{
var oGame

    this.setup = function()
    {
    createCanvas(750, 450);
    frameRate = 60;
    oGame = this.sceneManager.findScene( Game ).oScene;
    }

    this.draw = function()    
    {
        background(0, 255, 0);
        fill("black");
        textSize(72);
        textAlign(CENTER);
        rectMode(CENTER);
        text("GAME OVER", camera.position.x, 100);
        textSize(40);
        text('Congratulations! You survived ' + oGame.getTime() + ' days of the COVID-19 pandemic by stealing health supplies from ' + oGame.getScore() + ' families!', camera.position.x, 230, 650, 200);
        //text('Score:' + oGame.getScore(), camera.position.x, 300);
        
         textSize(60);
        if ( Math.floor(frameCount / 30) % 2 == 0 )    {
    text('Press any Key to Restart', camera.position.x, 390);

    }
    }

    this.keyPressed = function()
    {
        this.sceneManager.showScene(Intro);
    }
}
