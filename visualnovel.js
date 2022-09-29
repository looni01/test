/*
//let startimg;
let giff;

function preload() {
  createCanvas(9600, 6000);
  //startImg = loadImage("/media/backgrounds/gametitle.png");
  giff = loadImage("/media/backgrounds/ui-red2.gif");
}

function draw(){
  background(200,100,2);
  //image(startImg, 0, 0);
  image(giff,0,0);
  fill(0);
  textSize(290);
  text("Hallo", 10,10);
}
*/

//sounds
//sea_magma sound effect by "Let's Play with Free Sound Effects" https://taira-komori.jpn.org/freesounden.html
//horror_zone1 sound effect by "Let's Play with Free Sound Effects" https://taira-komori.jpn.org/freesounden.html
//backgrounds
let startImg;
let gameTitleImg;
let nirvana1Img;
let nirvana2Img;
let lava1;
let lava2;
let dust;
//let video1;
//characters
let protagonistbaby;
let protagonistbaffled;
let ghostbaffled;
let ghostsmile;
let ghostbigsmile;
let ghostextravagant;
let empty2;
//boats
let babyboat;
let babyboatfalling;
let babyboatswimming;
let chefboat;

function preload() {
  createCanvas(9600, 6000);

  //backgrounds
  startImg = loadImage("/media/backgrounds/ui-red2.gif");
  lava1 = loadImage("/media/backgrounds/lava1.gif");
  lava2 = loadImage("/media/backgrounds/lava2.png");
  nirvana1Img = loadImage("/media/backgrounds/nirvana1.png");
  nirvana2Img = loadImage("/media/backgrounds/nirvana2.png");
  gameTitleImg = loadImage("/media/backgrounds/gametitle.png");
  //dust gif source: https://64.media.tumblr.com/96bfcda9ab211b730d680a052d19f83d/tumblr_o7w2veChcr1runoqyo4_540.gifv
  dust = loadImage("/media/backgrounds/dust.gif");

  //boats
  babyboat = loadImage("/media/boats/babyboat.png");
  babyboatfalling = loadImage("/media/boats/babyboat-falling1.gif");
  babyboatswimming = loadImage("/media/boats/babyboat-swimming.gif");
  chefboat = loadImage("/media/boats/chefboat (copy).png");

  /* video1 = createVideo("media/backgrounds/ui-red-window1test.mp4", vidLoad);
  video1.size(100, 100); */

  //characters
  protagonistbaby = loadImage("/media/characters/protagonist-baby.png");
  protagonistbaffled = loadImage("/media/characters/protagonist-baffled.png");
  ghostbaffled = loadImage("/media/characters/ghost-baffled.png");
  ghostsmile = loadImage("/media/characters/ghost-smile.png");
  ghostbigsmile = loadImage("/media/characters/ghost-bigsmile.png");
  ghostextravagant = loadImage("/media/characters/ghost-extravagant.png");

  empty2 = loadImage("/media/characters/empty2.png");
}

/*
// This function is called when the video loads
function vidLoad() {
  video1.play();
  video1.volume(10);
}
*/

////////////////////////////////////////////////////////////////////////////////////////
function beginning() {
  // image(startImg, 0, 0);
  //font designed by CloutierFontes on fontspace.com
  //image(gameTitleImg, 0, 0);
  //textbox
  fill(0);
  rect(0, 495, 960, 105);
  //text
  textSize(18);
  fill(200);
  textAlign(CENTER);
  text("[Drücke Leertaste um weiter zu kommen.]", 480, 550);
}

//boats getting smaller
let scaleCounter = 1;

//background changing color
let backgroundTrans = 255;
let bgChange = -1;

function nirvana(klickCounter) {
  let dialogs = [
    [nirvana1Img, empty2, ""],
    [nirvana1Img, protagonistbaffled, "Was..."],
    [nirvana1Img, empty2, ""],
    [nirvana1Img, protagonistbaffled, "W... Wo bin ich?"],
    [nirvana1Img, protagonistbaffled, ""],
    [nirvana1Img, empty2, "W... Wo bin ich?"],
    [nirvana1Img, protagonistbaffled, "W... Wo bin ich?"],
    [nirvana1Img, ghostbaffled, "Woher soll ich das wissen, das ist dein Traum."],
    [nirvana1Img, protagonistbaffled, "..."],
    [nirvana1Img, ghostbigsmile, "Sieh mich nicht so schreckhaft an, ich mache hier auch nur meinen Job."],
    [nirvana1Img, protagonistbaffled, "Wovon sprichst du?"],
    [nirvana1Img, ghostsmile, "Ich bin hier um dir die Fragen auf deine Antworten zu geben,\ndie du schon so lange hast."],
    //[lava1, emptyCharacterImage, "Du wurdest ungefragt in diese Welt geworfen."],
    [lava1, babyboatfalling, "Du wurdest ungefragt in diese Welt geworfen,"],
    [lava1, babyboatswimming, "und wirst seither durch sie hindurchgezogen ohne jemals irgendwie eine Erklärung\nfür all das bekommen zu haben."],
    [lava1, babyboatswimming, "Niemand hat dich gefragt, ob du dein Leben leben möchtest.", "dualPic", protagonistbaby],
    [lava1, ghostextravagant, "Lass uns die Menschen um dich herum anschauen."],
    [lava2, ghostsmile, "Dein Chef ist ein gutes Beispiel für die Boomergeneration.", "dualPicScale", chefboat],
    [empty2, empty2, "empty"],
  ];

  //Smoke
  //background(120, 0, 20, backgroundTrans);
  image(dust, 100, 0);
  backgroundTrans += bgChange;
  if (backgroundTrans === 0) {
    bgChange = 1;
  }
  if (backgroundTrans >= 255) {
    bgChange = -1;
  }
  //Background
  image(dialogs[klickCounter][0], 0, 0);

  //Character Image
  image(dialogs[klickCounter][1], 0, 0);

  if (dialogs[klickCounter].length >= 4 && dialogs[klickCounter][3] === "dualPic") {
    image(dialogs[klickCounter][4], 0, 0);
    //wait(10000);
    //newSceneKlickCounter++;
  }

  if (dialogs[klickCounter].length >= 4 && dialogs[klickCounter][3] === "dualPicScale") {
    push();
    scale(scaleCounter);
    //translate(400, 0);
    image(dialogs[klickCounter][4], 470, 200);
    pop();

    scaleCounter -= 0.0005;
    if (scaleCounter <= 0.7) {
      scaleCounter = 0;
    }
    console.log(scaleCounter);
  }

  //test change

  //TextBox + Text
  if (dialogs[klickCounter][2].length > 0) {
    //textbox
    fill(0);
    rect(0, 495, 960, 105);
    //text
    textSize(18);
    fill(220);
    textAlign(CENTER);
    text(dialogs[klickCounter][2], 480, 540);
  }

  //go out of the scene
  if (klickCounter >= dialogs.length - 1) {
    sceneNumber++;
    newSceneKlickCounter = 0;
  }
}

//
let fallcounter = 1;
function nirvana2(klickCounter) {}
function restart(klickCounter) {
  image(lava1, 0, 0);

  fill(220);
  textSize(18);
  text("Die Welt bleibt ein schlechter Ort.", 630, 95);
  textSize(12);
  text("[Klicke eine Maustaste um es nochmal zu probieren]", 675, 150);
}

//countdown 10 seconds * 30 frames per second
let countDownTimer = 10 * 30;
let klickCounter = 1;
let singleKlickCheck = false;

let sceneNumber = 1;
//let newScene = true;
let newSceneKlickCounter = 0;

function draw() {
  clear();
  if (!keyIsPressed) {
    singleKlickCheck = true;
  }
  if (keyIsPressed && singleKlickCheck) {
    singleKlickCheck = false;
    klickCounter++;
    newSceneKlickCounter++;
  }
  ///===
  if (sceneNumber === 1) {
    beginning();
    if (newSceneKlickCounter === 1) {
      sceneNumber++;
      newSceneKlickCounter = 0;
    }
  }
  if (sceneNumber === 2) {
    nirvana(newSceneKlickCounter);
  }
  if (sceneNumber === 3) {
    nirvana2(newSceneKlickCounter);
  }
  if (sceneNumber === 4) {
    restart(newSceneKlickCounter);
  }

  //restart screen
  if (sceneNumber === 12) {
    restart();
    if (mouseIsPressed) {
      klickCounter = 1;
    }
  }
}
