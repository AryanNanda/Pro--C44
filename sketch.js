
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Body = Matter.Body;
var button,box;
var bg,play,bg2,bg3;
var gameState = 0 ;
function preload()
{
play = loadSound("Music/Music.mp3");
bg = loadImage("images/cool-backgrounds.png");
bg2 = loadImage("images/images.png");
bg3 = loadImage("images/Hoop.png");
}

function setup() {
  createCanvas(900,600);
engine = Engine.create();
world = engine.world;
//Create the Bodies Here.
//play.play();
Engine.run(engine);
buttons = new Buttons;
 
}
function draw() {
rectMode(CENTER);
if(gameState===0)
background(bg);
buttons.display();
}

