
var rx = 50;
var ry = 50;
var ra = 250;
var rb = 50;
var rc = 50;
var rd = 250;
var re = 250;
var rf = 250;
var rw = 100;
var rh = 100;
let squareColor1 = 0;
let squareColor2 = 0;
let squareColor3 = 0;
let squareColor4 = 0;
colorA = []
let i = 0;
let j = 0;
let k = 0;
let l = 0;
var x;
var changeDirection;
function cloud(x, y, size) {
	fill(255, 255, 255);
	noStroke();
	arc(x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
	arc(x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
	arc(x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
	arc(x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
}
function setup() {
  squareColor1 = color(255, 0, 0);
  squareColor2 = color(0, 255, 0);
  squareColor3 = color(0, 0, 255);
  squareColor4 = color(0, 180, 255);
  colorA = [color(255,0,0),color(0, 255, 0),color(0, 0, 255), color(0, 180, 255)];
  x = 1;
	changeDirection = false;
	createCanvas(700, 400);
}

function draw() {
	background(217,255,208);
  fill(100,180,255);
  noStroke();
  rect(100, 100, 200, 200);
  rect(300,195,120,10);
  rect(420,160,150,100,10);
  cloud(472, x, 3);
	fill(squareColor1);
  noStroke();
  rect(50, 50, 100, 100);
	fill(squareColor2);
  noStroke();
  rect(250, 50, 100, 100);
	fill(squareColor3);
  noStroke();
  rect(50, 250, 100, 100);
	fill(squareColor4);
  noStroke();
  rect(250, 250, 100, 100);
  if(x>160){
		changeDirection=true}
  else if (x<=0){
      changeDirection=false}
  if (x>=0 && changeDirection == false){
        x=x+1}
  else if(changeDirection == true){
          x=x-1}
}
function mousePressed() {
  if (overRect(rx, ry, rw, rh))
  {
    squareColor1 = colorA[i % colorA.length];
    i++;
  }
  else if (overRect(ra, rb, rw, rh))
  {
    squareColor2 = colorA[j % colorA.length];
    j++;
  }
  else if (overRect(rc, rd, rw, rh))
  {
    squareColor3 = colorA[k % colorA.length];
    k++;
  }
  else if (overRect(re, rf, rw, rh))
  {
    squareColor4 = colorA[l % colorA.length];
    l++;
  }
}
function overRect(x, y, w, h) {
  if ((mouseX > x) && (mouseX < x + w) &&
  (mouseY > y) && (mouseY < y + h) ) {
  return true;
  } else {
  return false;
  }
}