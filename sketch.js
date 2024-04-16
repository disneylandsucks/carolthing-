let debug = true;

let bg;
let y = 0;

let circles = []

class NoisyCircle{
  
  constructor(x,y,r, col){
    
    this.x = x
    this.y = y
    this.r = r
    this.col =  col
    
  }
  
  render(){
    
    fill (this.col)
    ellipse(this.x, this.y, this.r * 2)
    
  }
  
}

// const circle

function setup() {
  bg = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1664906227/CAROLWORDSMEME_w0vlds.png');
  createCanvas(windowWidth, windowHeight)
    audio = createAudio("aespa 에스파 Drama MV [TubeRipper.com].mp3");
  player = new Player(windowWidth/2, windowHeight/2, 0.4)
  brick = new Brick(windowWidth/10.7, windowHeight/3, .5)

  speed = 5;
}



function preload() {

   bg = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1664904486/wildfire-Stanislaus-National-Forest-California-2013_wpnlko.webp');
  
  playerImg = loadImage("https://res.cloudinary.com/painkillerkid/image/upload/v1664902368/CAROLFACELOL_iooebk.png")
  brickImg = loadImage("https://res.cloudinary.com/painkillerkid/image/upload/v1664904336/GettyImages-1302532477-1-800x545_wios7u.jpg")

}


function draw() {

background(bg);
//   circles.forEach(circle => {
//     circle.render()
    
  // })
  audio.autoplay(true);
  audio.loop(true);
  
  push();
  brick.display();
  pop();

  push();
  player.display();
  pop();

if (debug) {
  showRectCollider(player.x, player.y, playerImg.width * player.s, playerImg.height * player.s)

  showRectCollider(brick.x, brick.y, brickImg.width * brick.s, brickImg.height * brick.s)

  if (player.collidesImg(brick.x, brick.y, brickImg.width, brickImg.height, brick.s)) {
    collidingColor = 'green';
  } else {
    collidingColor = 'red'
  }
    circles.forEach(circle => {
    circle.render()
    
  })
}

if (keyIsPressed && keyCode === UP_ARROW) {
  moveY(player, -speed)
}
if (keyIsPressed && keyCode === DOWN_ARROW) {
  moveY(player, speed)
}
if (keyIsPressed && keyCode === LEFT_ARROW) {
  moveX(player, -speed)
}
if (keyIsPressed && keyCode === RIGHT_ARROW) {
  moveX(player, speed)
}

}

class Player {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  display() {
    translate(this.x, this.y)
    scale(this.s)
    image(playerImg, 0, 0)
  }
  collidesFunc1(x, y, w, h) {
  if (
    this.x - w/2 <= x + w/2 &&
    this.x + w/2 >= x - w/2 && 
    this.y - h/2 <= y + h/2 && 
    this.y + h/2 >= y - h/2) {
    return true;
  }
  else {
    return false;
    }
  }
  collidesFunc2(x, y, w, h) {
    if (
      this.x >= x - w &&
      this.x <= x + w &&
      this.y >= y - h &&
      this.y <= y + h) {
      return true;
    }
    else {
      return false;
    }
  }
  collidesImg(x, y, w, h, s) {
    if (
      this.x >= x - (w * s) &&
      this.x <= x + (w * s) &&
      this.y >= y - (h * s) &&
      this.y <= y + (h * s)) {
      return true;
    }
    else {
      return false;
    }
  }
}

class Brick {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  display() {
    translate(this.x, this.y)
    scale(this.s)
    image(brickImg, 0, 0)
  }
}

//Other functions

var collidingColor = 'rgb(0,50,255)';

function showRectCollider(x, y, w, h) {
  noFill();
  stroke(collidingColor);
  strokeWeight(5);
  rect(x, y, w, h)
}

function moveX(object, speed) {
  object.x += speed;
}

function moveY(object, speed) {
  object.y += speed;
}

function mousePressed (){
  
  
  const randomCol = [random(0, 255), random(0, 255), random(0, 255)]
  circles.push(new NoisyCircle(mouseX, mouseY, random (20,100), randomCol))
  
  // ('random(0, 255), random(0, 255), random(0, 255),')
  // square(mouseX, mouseY, 30, randomCol)
  
  
}
