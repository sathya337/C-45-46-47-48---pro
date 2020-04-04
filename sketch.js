var canvas, backgroundImage;

var gameState = 0;

var playerInfo;
var database;
var form, player, game;

function setup(){
  canvas = createCanvas(1800,1800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if(gameState === 1){
    clear();
    game.play();
  }
}
