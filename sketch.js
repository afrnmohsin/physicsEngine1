const Engine = Matter.Engine;//TEACHER ACTIVITY
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    object = Bodies.rectangle(200,100,50,50);
    World.add(world,object);

    var object_options ={
        isStatic: true
    }


    console.log(object.type)
    console.log(object.position.x)
    console.log(object.position.y)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(200,200,50,50)
    rect(object.position.x,object.position.y,50,50);
}

/*
const Engine = Matter.Engine;//STUDENT ACTIVITY
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0, 
          
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}
*/
