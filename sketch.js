var monkey , monkey_running
var banana,obstacle
var FoodGroup,bananaImage
var ObstaclesGroup,obstacleImage
var score
var ground

function preload(){
   
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  FoodGroup = new Group();
  ObstaclesGroup = new Group();
  
  score=0;
}

function draw() {
  background("green");
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")&& ) {
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground)
  spawnFood();
  spawnObstacles();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score ,500,50);
  
  var survivalTime=0
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+survivalTime,100,500);
}

function spawnFood() {
  
  if(frameCount % 80 === 0) {
   var banana=createSprite(600,250,40,10);
   banana.y= random(120,200)
   banana.addImage(bananaImage);
   banana.scale=(0.05);
   banana.velocityX= -5;
   banana.lifetime= 300;
    
   monkey.depth=banana.depth+1;
  
    FoodGroup.add(banana);
     }
}

function spawnObstacles() {
  
  if(frameCount % 300 === 0) {
   var obstacle=createSprite(800,350,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale=(0.2);
   obstacle.velocityX= -6;
   obstacle.lifetime= 300;
   
      ObstaclesGroup.add(obstacle);
   }
}