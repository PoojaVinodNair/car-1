var hypnoticBall, database;
var position;
var gameState=0;
var canvas,backgroundImage;
var playerCount;
var player,game,form;

function setup(){
  database = firebase.database();
  canvas=createCanvas(500,500);
game=new Game();
game.getState();
game .start();
  
}

function draw(){
  background("blue");
  
   
    
  
}

