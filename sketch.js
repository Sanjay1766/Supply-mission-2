var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	box1=createSprite(width/2, 650, 200, 20);
	box1.shapeColor="red";
	
	box2=createSprite(width/1.60, 615, 20, 100);
	box2.shapeColor="red";

    box3=createSprite(width/2.75, 615, 20, 100);
	box3.shapeColor="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	b1 = Bodies.rectangle(width/2 , 630 , 200 , 20, { isStatic:true});
	World.add(world, b1);
  
	b2 = Bodies.rectangle(width/1.60, 600, 20, 100, { isStatic:true});
	World.add(world, b2);
  
	b3 = Bodies.rectangle(width/2.75, 600, 20, 100, { isStatic:true});
	World.add(world, b3);


	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
  
   keyPressed();
	drawSprites();
	
   
  }
  
  function keyPressed() {
   if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody, false);
  
	}
	
  }

