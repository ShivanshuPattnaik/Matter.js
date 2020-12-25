const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

var object, ball;

function setup() {
  
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {

    isStatic : true

  }

  var options2 = {

    restitution : 1.0

  }

  object = Bodies.rectangle(500, 390, 1000, 10, options);

  ball = Bodies.circle(200, 100, 20, options2);
  
  World.add(myWorld, object);
  
  World.add(myWorld, ball);

}

function draw() {
  
  background(0);

  Engine.update(myEngine);

  rectMode(CENTER);
  ellipseMode(CENTER);

  rect(object.position.x, object.position.y, 1000, 10);

  ellipse(ball.position.x, ball.position.y, 20, 20);

}