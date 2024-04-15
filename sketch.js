const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 80,
  "offsetx": 0,
  "offsety": 35
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const backgroundColor  = "#e3e1dc";

const inkcolor  = "#000000";
const shadowcolor  = "#858585";
// const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  // strokeWeight(4);
  noStroke();


  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for first stroke
  let size1 = letterData["size"];
  let pos1x = posx + letterData["offsetx"];
  let pos1y = posy + letterData["offsety"];

  // determine parameters for second stroke
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

// draw curved stroke
  fill(shadowcolor);
  beginShape();
  vertex(260, 130);
  bezierVertex(240, 200, 128, 136, 150, 405);
  bezierVertex(150, 380, 90, 120, 280, 70);
endShape(CLOSE)
beginShape();
vertex(310, 70);
bezierVertex(240, 200, 290, 236, 300, 405);
bezierVertex(310, 380, 300, 120, 310, 70);
endShape(CLOSE)
  fill(inkcolor);
  filter(BLUR,4);

  // draw stroke 1
  beginShape();
vertex(pos1x = 310, pos1y = 70);
bezierVertex(pos1x = 240, pos1y = 200, pos1x = 290, pos1y = 236, pos1x = 300, pos1y = 405);
bezierVertex(pos1x = 310, pos1y = 380, pos1x = 300, pos1y = 120, pos1x = 310, pos1y = 70);
endShape(CLOSE)

// draw stroke 2
  beginShape();
  vertex(pos2x = 340, pos2y = 280);
  bezierVertex(pos2x = 250, pos2y = 200, pos2x = 390, pos2y = 250, pos2x = 70, pos2y = 280);
endShape(CLOSE)

// draw stroke 3
  beginShape();
  vertex(270, 70);
  bezierVertex(150, 300, 110, 120, 270, 70);
  endShape(CLOSE)

// draw blot
push()
translate(45, -20)
angleMode(RADIANS)
rotate(0.2)
  ellipse(155, 221, 20, 40);
  pop()
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
