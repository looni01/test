let startimg;

function preload() {
  createCanvas(9600, 6000);
  startImg = loadImage("/media/backgrounds/gametitle.png");
}

function draw(){
  background(200,100,2);
  image(startImg, 0, 0);
  fill(0);
  text("Hallo", 0,0);
}


