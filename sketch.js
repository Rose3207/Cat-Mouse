var cat ,garden;
var background1;

function preload() {
    //load the images here
    cat = loadImage("cat1.png");   
    catRunning = loadAnimation("cat2.png","cat3.png");
    catSad = loadImage("cat4.png");
    garden = loadImage("garden.png");
    mouseStanding = loadImage("mouse1.png");
    mouseTeasing = loadAnimation("mouse3.png");
}

function setup(){
    createCanvas(1000,800);
   // background("blue");
    //create tom and jerry sprites here
   background1 = createSprite(500,400,10,50);
   background1.addImage(garden);
  // background1.scale = 0.5;

  cat1 = createSprite(700,660)
  cat1.addImage(cat);
  cat1.scale = 0.1;

  mouse1 = createSprite(100,660)
  mouse1.addImage(mouseStanding);
  mouse1.scale = 0.1;

}
function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

if(keyDown("LEFT_ARROW")){

cat1.velocityX = -5;
cat1.addAnimation("cat",catRunning);
cat1.changeAnimation("cat");

}

if(cat1.isTouching(mouse1)){

    cat1.velocityX = 0;
    mouse1.addAnimation("mouse",mouseTeasing);
    mouse1.changeAnimation("mouse");
    cat1.addAnimation("catworry",catSad);
    cat1.changeAnimation("catworry");
}

    drawSprites();
}


//function keyPressed(){

  //For moving and changing animation write code here


//}
