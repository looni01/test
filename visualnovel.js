//let startimg;
let giff;

function preload() {
  createCanvas(9600, 6000);
  //startImg = loadImage("/media/backgrounds/gametitle.png");
  giff = loadImage("/media/backgrounds/lava1.gif");
}

function draw(){
  background(200,100,2);
  //image(startImg, 0, 0);
  image(giff,0,0);
  fill(0);
    textSize(20);
  text("Hallo", 0,0);
}


