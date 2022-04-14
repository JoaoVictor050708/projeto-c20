
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var block1,block2,block3;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;


	var plane_options = {
		isStatic : true
	}

	var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}

	var block2_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

	var block3_options = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}

	//Crie os Corpos Aqui.
	plane = Bodies.rectangle(350,710,800,25,plane_options);
	World.add(world,plane);

	block1 = Bodies.rectangle(110,50,100,100,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(550,50,200,100,block2_options);
	World.add(world,block2);

	block3 = Bodies.circle(310,50,50,block3_options);
	World.add(world,block3);


	Engine.run(engine);
  
}


function draw() {
  background("lightgreen");
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(plane.position.x,plane.position.y,800,20);

  fill("red");
  rectMode(CENTER);
  rect(block1.position.x,block1.position.y,100,100);

  fill("blue");
  rectMode(CENTER);
  rect(block2.position.x,block2.position.y,200,100)

  fill("yellow");
  ellipseMode(RADIUS);
  ellipse(block3.position.x,block3.position.y,50)
  


  drawSprites();
 
}



