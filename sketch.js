
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(200,450, 70);
	
	//below the regular stage, there is a 'rendering' of what we did with simple objects. It is VERY COOL!
	var render = Render.create({
		//'body' from HTML. The renderer's canvas is being inserted within the body. 
		element: document.body,
		//reference to the engine we are using
		engine: engine,
		options: {
			//The target width in pixels of the render.canvas to be created.
			width: 1600,
			//The target height in pixels of the render.canvas to be created.
			height: 700,
			wireframes: true
		}
	}); 
	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paper.display();
}
  function keyPressed(){
	if (keyCode === UP_ARROW){
	//Matter.Body.applyForce(body, position, force)
	//the body is the one we are applying force to
	//the position is the one we are starting from({x: , y: })
	//the force is the vector we want our object to travel along. This is the amount up and down and left and right the object will go
	//we only say 'paperObject.body.position' because remember: this includes x and y and is therefore a vector.

	Matter.Body.applyForce(paper.body, paper.body.position, {x: 590, y: -545});
	}	

	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: -100, y:0});
	}
}
  
  

