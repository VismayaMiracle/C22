const  Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;

var engine,world,ball,ground;

function setup() {
  createCanvas(400,400);
  
  engine= Engine.create();
  world= engine.world;


  var ball_option={

    restitution : 1
  }

  ball= Bodies.circle(200,200,20,ball_option)
 World.add(world,ball);

 var ground_option={

  isStatic : true
}

ground= Bodies.rectangle(200,290,290,30,ground_option)
World.add(world,ground);


}

function draw() {
  background("purple");  
 
  Engine.update(engine)
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,30)
  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,290,30)

  

}