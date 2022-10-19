const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var fondoImg,fondo;
var nave,nave1img;
var ast1,ast2,ast3,ast4,ast5,ast6;
var naveenem;
var satelit;
var obstacles;
var bala,balaImg;
var balas = [];

function preload(){
  fondoImg = loadImage("imagenes/Fondo2.0.png");
  nave1img = loadImage("imagenes/Nave1.png")
 ast1 = loadImage("imagenes/ast1.png");
 ast2 = loadImage("imagenes/ast2.png");
 ast3 = loadImage("imagenes/ast3.png");
 ast4 = loadImage("imagenes/ast4.png");
 ast5 = loadImage("imagenes/ast5.png");
 ast6 = loadImage("imagenes/ast6.png");
 satelit = loadImage("imagenes/obssate.png");
 naveenem = loadImage("imagenes/Naveenem.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  nave = createSprite(windowWidth/2,windowHeight - 125);
  nave.addImage(nave1img);
  nave.scale = 0.4
  Edge = createEdgeSprites();
}

function draw() {
  background(180);
  image(fondoImg,0,0,windowWidth,windowHeight);
 if (keyIsDown(RIGHT_ARROW)){
nave.x = nave.x + 20
 }
 if (keyIsDown(LEFT_ARROW)){
  nave.x = nave.x - 20
   }
   nave.collide(Edge)
   spawnObstacles()
   for(var i = 0;i>balas.lenght;i ++){
    ddisparo(balas[i])
   }
  drawSprites() 
  Engine.update(engine);0
}

function spawnObstacles(){
  if (frameCount%50 == 0){
obstacles = createSprite(random(0,windowWidth),0);
obstacles.velocityY = 4
var ram = Math.round(random(1,8))
switch (ram) {
  case 1:obstacles.addImage(ast1)
    
    break;
    case 2:obstacles.addImage(ast2)
    
    break;
    case 3:obstacles.addImage(ast3)
    
    break;
    case 4:obstacles.addImage(ast4)
    
    break;
    case 5:obstacles.addImage(ast5)
    
    break;
    case 6:obstacles.addImage(ast6)
    
    break;
    case 7:obstacles.addImage(naveenem)
    
    break;
    case 8:obstacles.addImage(satelit)
    
    break;

  default:
    break;
}
obstacles.scale = 0.4
obstacles.lifetime = 300
  }
}

function keyPressed(){
  if (keyCode == 32){
bala = new Disparo(nave.x,nave.y);
balas.push(bala)
  }
}

function ddisparo(bala){
  if (bala){
    bala.display();
  }
}

function keyReleased(){
if (keyCode == 32){
  balas[balas.lenght -1].shoot();
}
}
