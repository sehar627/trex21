
var trex,treximg

function preload(){
treximg=loadAnimation("trex1.png","trex3.png","trex4.png")

}
function setup(){
  createCanvas(600,200)

trex=createSprite(100,160,40,30)
trex.addAnimation("runningtrex",treximg)


}


function draw(){

  background("black")
  if(keyDown("space")){
    trex.velocityY=-7

  }

  trex.velocityY=trex.velocityY+0.5
drawSprites();
}