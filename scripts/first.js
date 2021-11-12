// Variables
x = 1;
y = 2;
h = 0;
s = 0;
l = 0;
// Setup
function setup() {
  createCanvas(windowWidth - 100, windowHeight - 100);
  frameRate(30);
  textSize(32);
}

// Draw
function draw() {
  h += Math.floor(random(3));
  s += Math.floor(random(3));
  l += Math.floor(random(3));
  h >= 256 ? (h = 50) : (h = h);
  s >= 256 ? (s = 50) : (s = s);
  l >= 256 ? (l = 50) : (l = l);
  fill(h, s, l);
  noStroke();
  drawRect(x, y);
  x += Math.floor(random(5));
  y += Math.floor(random(5));
  //
  x < 100 ? (x += 5) : (x -= 1);
  y < 100 ? (y += 5) : (y -= 1);
  //
  x >= 500 ? (x = 0) : (x = x);
  y >= 500 ? (y = 0) : (y = y);
}
// Functions
function drawRect(x, y) {
  return rect(x, y, 50, 50, 20);
}
