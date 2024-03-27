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
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
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
  beginShape();
  vertex(270, 70);
  bezierVertex(150, 300, 110, 120, 270, 70);
  endShape(CLOSE)


  beginShape();
  vertex(340, 280);
  bezierVertex(250, 200, 390, 250, 70, 280);
endShape(CLOSE)

pop();
angleMode(RADIANS)
  ellipse(155, 230, 20, 40);

push();
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
