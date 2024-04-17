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

  "offsetx": 30,
  "offsety": 0,
  "tailoffsetx": 0,
  "tailoffsety": 0,
  "bulkoffsetx": 0,
  "bulkoffsety": 0,
  "midoffsetx": 0,
  "midoffsety": 0,
  "2offsetx": 0,
  "2offsety": 0,
  "2tailoffsetx": 0,
  "2tailoffsety": 0,
  "2bulkoffsetx": 0,
  "2bulkoffsety": 0,
  "2midoffsetx": 0,
  "2midoffsety": 0
}

const letterB = {

  "offsetx": 150,
  "offsety": 0,
  "tailoffsetx": 130,
  "tailoffsety": 0,
  "bulkoffsetx": 260,
  "bulkoffsety": 0,
  "midoffsetx": 160,
  "midoffsety": 0
}

const letterC = {

  "offsetx": 420,
  "offsety": 140,
  "tailoffsetx": 440,
  "tailoffsety": -30,
  "bulkoffsetx": 400,
  "bulkoffsety": 0,
  "midoffsetx": 390,
  "midoffsety": 60,
  "2offsetx": 0,
  "2offsety": 0,
  "2tailoffsetx": 0,
  "2tailoffsety": 0,
  "2bulkoffsetx": 0,
  "2bulkoffsety": 0,
  "2midoffsetx": 0,
  "2midoffsety": 0
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
  // determine parameters for shadow stroke

  let TopSx = 280 + letterData["soffsetx"];
  let TopSy = 70 + letterData["soffsety"];
  let BulkSx = 240 + letterData["sbulkoffsetx"];
  let BulkSy = 200 + letterData["sbulkoffsety"];
  let MidSx = 290 + letterData["smidoffsetx"];
  let MidSy = 236 + letterData["smidoffsety"];
  let TailSx = 300 + letterData["stailoffsetx"];
  let TailSy = 405 + letterData["stailoffsety"];

  // determine parameters for first stroke

  let Top1x = 280 + letterData["offsetx"];
  let Top1y = 70 + letterData["offsety"];
  let Bulk1x = 240 + letterData["bulkoffsetx"];
  let Bulk1y = 200 + letterData["bulkoffsety"];
  let Mid1x = 290 + letterData["midoffsetx"];
  let Mid1y = 236 + letterData["midoffsety"];
  let Tail1x = 300 + letterData["tailoffsetx"];
  let Tail1y = 405 + letterData["tailoffsety"];
  
  // determine parameters for second stroke

  let Top2x = 340 + letterData["2offsetx"];
  let Top2y = 280 + letterData["2offsety"];
  let Bulk2x = 250 + letterData["2bulkoffsetx"];
  let Bulk2y = 200 + letterData["2bulkoffsety"];
  let Mid2x = 390 + letterData["2midoffsetx"];
  let Mid2y = 250 + letterData["2midoffsety"];
  let Tail2x = 70 + letterData["2tailoffsetx"];
  let Tail2y = 280 + letterData["2tailoffsety"];

// draw curved stroke

  fill(shadowcolor);
  beginShape();
  vertex(260, 130);
  bezierVertex(240, 200, 128, 136, 150, 405);
  bezierVertex(150, 380, 90, 120, 280, 70);
endShape(CLOSE)

  fill(inkcolor);
    filter(BLUR,4);

//   beginShape();
// vertex(Top1x, Top1y);
// bezierVertex(Bulk1x, Bulk1y, Mid1x, Mid1y, Tail1x, Tail1y);
// endShape(CLOSE)

// beginShape();
// vertex(Top2x, Top2y);
// bezierVertex(pos2x = 250, pos2y = 200, pos2x = 390, pos2y = 250, pos2x = 70, pos2y = 280);
// endShape(CLOSE)
// beginShape();
// vertex(270, 70);
// bezierVertex(150, 300, 110, 120, 270, 70);
// endShape(CLOSE)

push()
translate(45, -20)
angleMode(RADIANS)
rotate(0.2)
  ellipse(155, 221, 20, 40);
  pop()

  // draw stroke 1
  beginShape();
vertex(Top1x, Top1y);
bezierVertex(Bulk1x, Bulk1y, Mid1x, Mid1y, Tail1x, Tail1y);
endShape(CLOSE)

// draw stroke 2
  beginShape();
  vertex(Top2x, Top2y);
  bezierVertex(Bulk2x, Bulk2y, Mid2x, Mid2y, Tail2x, Tail2y);
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
