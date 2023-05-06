function preload() {
  myFont = loadFont('Pixeled.ttf');
}
let s = ["look","I","AM","ME","EYEs"]

function setup() {
  createCanvas(1920, 1080);
  textFont(myFont);
  textSize(50);
  textAlign(CENTER, CENTER);
}

function draw() {
  
 var randomText = s[int(random(s.length))];

  let x = int(random(-150, width));
  let y = int(random(-150, height));
  let w = int(random(50, 150));
  let h = int(random(50, 150));
  let g = int(random(0, 255));
  if(mouseIsPressed){
  textSize((w + h) / 5);
  fill(g);
  rect(x, y, w, h);
  fill(0);
  text(randomText, x + w / 2, y + h / 2);
}
}

