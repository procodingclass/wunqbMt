const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var points = [
  { x: 400, y: 200 },
  { x: 600, y: 50 },
  { x: 650, y: 300},
  { x: 800, y: 180}
];



var bgPosX = 425;
var bgPosY = 235;

function preload(){
  bgImg = loadImage("assets/background.png");
  playerImg = loadImage("./assets/player1.png");
}

function setup() {
  var canvas = createCanvas(850, 470);
  engine = Engine.create();
  world = engine.world;

  player = new Player(100, 200, 30, 30, playerImg);
  sling = new Sling(points[0], player.body);

  // declare and create  var mouseObject 

  // define options for mouse

  //declare and create var mConstraint as MouseConstraint

  // add mConstraint to the world

}


function draw() {
  background(bgImg);
  Engine.update(engine);
  
  resetBackground();
  
  sling.display();
  player.display();

  
  for(var i=0; i< points.length; i++){
    drawPoints(i);
     // write code to move the points 
          
    }

    

 
}



function drawPoints(i) {
  push();
  stroke("#fff9c4");
  strokeWeight(3);
  ellipseMode(RADIUS);
  fill("#4527a0");
  ellipse(points[i].x, points[i].y, 10, 10);
  pop();
}


function resetBackground() {
  push();
  imageMode(CENTER);
  image(bgImg, bgPosX, bgPosY, 1900, 470);
  pop();
  bgPosX -= 0.3;

  if (bgPosX < 0) {
    bgPosX = 425;
  }
}
