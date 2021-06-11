var ground, iss_img, spacecraft1_img, spacecraft2_img, spacecraft3_img, spacecraft4_img ;
var  iis,spacecraft1, spacecraft2, spacecraft3, spacecraft4;

function preload(){
  ground = loadImage("../images/spacebg.png");
  iss_img = loadImage("../images/iss.png");  
  spacecraft1_img = loadImage("../images/spacecraft1.png");
  spacecraft2_img = loadImage("../images/spacecraft2.png");
  spacecraft3_img = loadImage("../images/spacecraft3.png");
  spacecraft4_img = loadImage("../images/spacecraft3.png");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}