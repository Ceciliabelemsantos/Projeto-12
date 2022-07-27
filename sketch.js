var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
 pathImg = loadImage("path.png");
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);
path = createSprite(200,200,50,400)
path.addImage("pathImg",pathImg)
path.velocityY = -4
path.scale=1.2;

boy = createSprite(200,350,20,20);
boy.addAnimation("boyImg",boyImg)
boy.scale=1.0;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
 boy.collide(leftBoundary)
 boy.collide(rightBoundary)
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
