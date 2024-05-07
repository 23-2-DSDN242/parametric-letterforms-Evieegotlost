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
  "2midoffsety": 0,
  "soffsetx": 0,
  "soffsety": 0,
  "stailoffsetx": 0,
  "stailoffsety": 0,
  "sbulkoffsetx": 0,
  "sbulkoffsety": 0,
  "smidoffsetx": 0,
  "smidoffsety": 0
}

const letterB = {

  "offsetx": 150,
  "offsety": 0,
  "tailoffsetx": 130,
  "tailoffsety": 0,
  "bulkoffsetx": 260,
  "bulkoffsety": 0,
  "midoffsetx": 160,
  "midoffsety": 0,
  "2offsetx": 250,
  "2offsety": 120,
  "2tailoffsetx": 370,
  "2tailoffsety": 120,
  "2bulkoffsetx": 370,
  "2bulkoffsety": 0,
  "2midoffsetx": 50,
  "2midoffsety": 0,
  "soffsetx": 130,
  "soffsety": 0,
  "stailoffsetx": 280,
  "stailoffsety": 0,
  "sbulkoffsetx": 400,
  "sbulkoffsety": -100,
  "smidoffsetx": 450,
  "smidoffsety": 0
}

const letterC = {

  "offsetx": 400,
  "offsety": 180,
  "tailoffsetx": 500,
  "tailoffsety": -10,
  "bulkoffsetx": 450,
  "bulkoffsety": 80,
  "midoffsetx": 390,
  "midoffsety": 180,
  "2offsetx": 335,
  "2offsety": 0,
  "2tailoffsetx": 730,
  "2tailoffsety": -200,
  "2bulkoffsetx": 420,
  "2bulkoffsety": -50,
  "2midoffsetx": 300,
  "2midoffsety": -150
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

  let Top1x = 280 + letterData["offsetx"];
  let Top1y = 70 + letterData["offsety"];
  let Bulk1x = 240 + letterData["bulkoffsetx"];
  let Bulk1y = 200 + letterData["bulkoffsety"];
  let Mid1x = 290 + letterData["midoffsetx"];
  let Mid1y = 236 + letterData["midoffsety"];
  let Tail1x = 300 + letterData["tailoffsetx"];
  let Tail1y = 405 + letterData["tailoffsety"];
  
  // determine parameters for second stroke
  let Top2x = 350 + letterData["2offsetx"];
  let Top2y = 280 + letterData["2offsety"];
  let Bulk2x = 250 + letterData["2bulkoffsetx"];
  let Bulk2y = 200 + letterData["2bulkoffsety"];
  let Mid2x = 390 + letterData["2midoffsetx"];
  let Mid2y = 250 + letterData["2midoffsety"];
  let Tail2x = 70 + letterData["2tailoffsetx"];
  let Tail2y = 280 + letterData["2tailoffsety"];

    // determine parameters for shadow stroke
    let Topsx = 300 + letterData["soffsetx"];
    let Topsy = 70 + letterData["soffsety"];
    let Bulksx = 240 + letterData["sbulkoffsetx"];
    let Bulksy = 200 + letterData["sbulkoffsety"];
    let Midsx = 128 + letterData["smidoffsetx"];
    let Midsy = 136 + letterData["smidoffsety"];
    let Tailsx = 150 + letterData["stailoffsetx"];
    let Tailsy = 405 + letterData["stailoffsety"];

// draw curved stroke

  fill(shadowcolor);
  beginShape();
  vertex(Topsx, Topsy);
  bezierVertex(Bulksx, Bulksy, Midsx, Midsy, Tailsx, Tailsy);
endShape(CLOSE)

  fill(inkcolor);
  
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


  filter(BLUR,2);


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

}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}