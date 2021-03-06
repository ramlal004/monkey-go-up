var backImage,backgr;
var player, player_running;
var ground,ground_img;
var bananagroup,stonegroup
var END =0;
var PLAY =1;
var gameState = PLAY;
var stoneImage
function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
stoneImage=loadImage("stone.png")
bananaImage=loadImage("banana.png")
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
   
  bananagroup=createGroup()
  stonegroup=createGroup()
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);
if(stonegroup.isTouching(player)){
  gameState=END
}
if(gameState==END){
  backgr.velocityX = 0;
   player.velocityY = 0;
   stonegroup.setVelocityXEach(0);
   bananaroup.setVelocityXEach(0);
}
  }
  spawnbananas()
  spawnStones()
  drawSprites();
}

function spawnStones(){
  if(frameCount%300==0){
    var stone=createSprite(800,300,10,10)
    stone.velocityX=-6
    stone.addImage(stoneImage)
    stone.scale=0.4
    stonegroup.add(stone)
  }
}

function spawnbananas(){
  if(frameCount%60==0){
    var banana =createSprite(800,150,10,10)
    banana.velocityX=-6
    banana.addImage(bananaImage)
    banana.scale=0.1
    bananagroup.add(banana)
  }
}

