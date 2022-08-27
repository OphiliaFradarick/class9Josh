var box;

function setup() {
 createCanvas(600,400);

 box = createSprite(300,200,30,30);
 box.shapeColor="teal";
}

function draw(){
 background("black");

 drawSprites();
}