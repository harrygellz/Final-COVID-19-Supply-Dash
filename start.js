var player;
var gravity = 10;
var velocity = 5;
var supplies;
var score = 1;
var fr = 60;
var timer = 1;
var totalscore = (score - timer);


function preload(){
    townIMG = loadImage("assets/background1.png");
    witchdocIMG = loadImage("assets/plague doctor player.png");
    sidewalkIMG = loadImage("assets/gamesidewalk.png");
    housesIMG = loadImage("assets/housesbackground.png");
    toiletpIMG = loadImage("assets/tpvector.png");
    titleIMG = loadImage("assets/COVID-19title.png");
    maskIMG = loadImage("assets/mask.png");
    handsanIMG = loadImage("assets/handsan.png");
    politicianIMG = loadImage("assets/politician.png");
    nightbackgroundIMG = loadImage("assets/nightbackground.png");
}

function setup(){
    createCanvas(750, 450);
    background(255,0,0);

    var mgr = new SceneManager();
    mgr.townIMG = townIMG; // inject bkImage property
    mgr.wire();
    mgr.showScene( Intro );
}
