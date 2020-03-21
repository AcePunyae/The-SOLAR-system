var sun
var earth
var mars
var venus
var mercury

var backgroundImage
function preload(){
    backgroundImage= loadImage("Galaxy.png");

}
function setup() {
  createCanvas(800,400);
  sun=createSprite(400, 200, 50, 50);
  mars=createSprite(300,20,20,20);
  venus=createSprite(600,50,25,25)
  earth=createSprite(750,200,10,10)
  mercury=createSprite(200,100,15,15)
}

function draw() {
  background(backgroundImage);  
sun.width,sun.height=sun.width+5,sun.height+5;
  drawSprites();
}