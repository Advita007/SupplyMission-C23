var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
var Bg,Bg_Img;
var sound;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
  packageIMG=loadImage("package.png");

  Bg_Img = loadImage("Bg.jpg");
  sound = loadSound("spooky.wav");

  
}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER)

  sound.play();

  packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
  packageSprite.scale=0.2;
  packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
  World.add(world,packageBody);


  helicopterSprite = createSprite(width/2, 200, 10,10);
  helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale=0.6;


  
  Bg = createSprite(400,250) 
  Bg.scale =2;
  Bg.addImage(Bg_Img);

  box2 = new Box(385,650,200,20);
  box3 = new Box(495,620,20,100);
  box1 = new Box (275,620,20,100);

  
  ground = new Ground(width/2, height-35, width,10);

  Bg.depth = helicopterSprite.depth;
  helicopterSprite.depth = helicopterSprite.depth + 1;
  
  Bg.depth= packageSprite.depth;
  packageSprite.depth = packageSprite.depth + 1;

  
}


function draw() {
 background(0);
 
 Engine.update(engine);
 box2.display();
 box1.display();
 box3.display();
 ground.display();
 


 packageSprite.x= packageBody.position.x 
 packageSprite.y= packageBody.position.y 

  

  keyPressed();
  drawSprites();
  

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody, false);
  }
}



