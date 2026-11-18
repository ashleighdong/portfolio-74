let ballX = 300;
let ballY = 300;
let ballSize = 40;
let score = 0;
let gameState = "START";
let img;

async function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);

  imageMode(CENTER);
  img = await loadImage("cat2.jpg");
  
}

function draw() {
  background(220);

  if (gameState == "START") {
    startScreen();
  }

  if (gameState == "L1") {
    levelOne();
  }

  if (gameState == "L2") {
    levelTwo();
  }

  if (gameState == "L3") {
    levelThree();
  }

  if (gameState == "WIN") {
    winScreen();
  }

  text("Score: " + score, width / 2, 40);
  
}

function startScreen() {
  background(30);

  fill(255);

  text("CATCH AND CHASE", width / 2, height / 2 - 30);
  text("Press any key to start", width / 2, height / 2 + 10);

  if (keyIsPressed) {
    gameState = "L1";
  }
  
}

function levelOne() {

  text("Level One", width / 2, height - 20);

  let distToBall = dist(ballX, ballY, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballX = random(width);
    ballY = random(height);
    score = score + 1;
  }

  if (score >= 5) {
    gameState = "L2";
  }

  line(ballX, ballY, mouseX, mouseY);

  circle(ballX, ballY, ballSize);
}

function levelTwo() {

  text("Level Two", width / 2, height - 20);

  let distToBall = dist(ballX, ballY, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballX = random(width);
    ballY = random(height);
    score = score + 1;
  }

  if (score >= 10) {
    gameState = "L3";
  }

  //line(ballX, ballY, mouseX, mouseY);

  circle(ballX, ballY, ballSize);
}

function levelThree() {

  text("Level Three", width / 2, height - 20);

  let distToBall = dist(ballX, ballY, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballX = random(width);
    ballY = random(height);
    score = score + 1;
    ballSize = ballSize - 2;
  }

  if (score >= 15) {
    gameState = "WIN";
  }

  //line(ballX, ballY, mouseX, mouseY);

  // circle(ballX, ballY, ballSize);

  image(img, ballX, ballY, ballSize, ballSize);
}

function winScreen() {
  background(0);

  fill(255);
  
  text("YOU WIN", width / 2, height / 2);
}