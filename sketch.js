var canvas;
var music;
var movingbox, surface1,surface2,surface3,surface4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(0,580,360,30);
    surface1.shapeColor="blue";
    surface2=createSprite(295,580,200,30);
    surface2.shapeColor="orange";
    surface3=createSprite(515,580,200,30);
    surface3.shapeColor="pink";
    surface4=createSprite(740,580,220,30);
    surface4.shapeColor="green";

    //create box sprite and give velocity
    movingbox=createSprite(random(20,750),100, 40,40);
    movingbox.shapeColor="white";
    movingbox.velocityX=8; 
    movingbox.velocityY=9;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    movingbox.bounceOff(edges);
    

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(movingbox)&& movingbox.bounceOff(surface1)) {
     //change color here 
     movingbox.shapeColor="blue";
     music.play();
     
    }
    if(surface2.isTouching(movingbox)&& movingbox.bounceOff(surface2)) {
        //change color here 
        movingbox.shapeColor="orange";
        movingbox.velocityX= 0;
        music.stop();
        
    }
    if(surface3.isTouching(movingbox)&& movingbox.bounceOff(surface3)) {
        //change color here 
        movingbox.shapeColor="pink";
        music.play();
    }    
    if(surface4.isTouching(movingbox)&& movingbox.bounceOff(surface4)) {
        //change color here 
        movingbox.shapeColor="green";
        music.play(); 
        
    }    
        drawSprites();
}
