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
  "offsetx": -54,
  "offsety": 8,
  "tailoffsetx": -10,
  "tailoffsety": 0,
  "bulkoffsetx": -6,
  "bulkoffsety": 2,
  "midoffsetx": -4,
  "midoffsety": 6,
  "2offsetx": -4,
  "2offsety": 0,
  "2tailoffsetx": 6,
  "2tailoffsety": 8,
  "2bulkoffsetx": 2,
  "2bulkoffsety": -4,
  "2midoffsetx": 14,
  "2midoffsety": 2,
  "soffsetx": -20,
  "soffsety": 2,
  "stailoffsetx": -6,
  "stailoffsety": 0,
  "sbulkoffsetx": -48,
  "sbulkoffsety": 8,
  "smidoffsetx": 18,
  "smidoffsety": 10,
}

const letterB = {

  "offsetx": -68,
  "offsety": 5,
  "tailoffsetx": -68,
  "tailoffsety": -10,
  "bulkoffsetx": -38,
  "bulkoffsety": 100,
  "midoffsetx": -30,
  "midoffsety": -42,
  "2offsetx": -10,
  "2offsety": 26,
  "2tailoffsetx": 70,
  "2tailoffsety": 76,
  "2bulkoffsetx": -36,
  "2bulkoffsety": 18,
  "2midoffsetx": -20,
  "2midoffsety": 14,
  "soffsetx": 80,
  "soffsety": -40,
  "stailoffsetx": 2,
  "stailoffsety": 4,
  "sbulkoffsetx": -58,
  "sbulkoffsety": 4,
  "smidoffsetx": 0,
  "smidoffsety": 0,
}

const letterC = {

  "offsetx": -28,
  "offsety": 150,
  "tailoffsetx": -74,
  "tailoffsety": -62,
  "bulkoffsetx": 48,
  "bulkoffsety": 86,
  "midoffsetx": -70,
  "midoffsety": 140,
  "2offsetx": -62,
  "2offsety": 34,
  "2tailoffsetx": 16,
  "2tailoffsety": 8,
  "2bulkoffsetx": -54,
  "2bulkoffsety": 10,
  "2midoffsetx": -86,
  "2midoffsety": -60,
  "soffsetx": 62,
  "soffsety": -24,
  "stailoffsetx": 8,
  "stailoffsety": -78,
  "sbulkoffsetx": -28,
  "sbulkoffsety": 15,
  "smidoffsetx": -32,
  "smidoffsety": -40,
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
  let TopSx = 70 + letterData["soffsetx"];
  let TopSy = 80 + letterData["soffsety"];
  let BulkSx = 80 + letterData["sbulkoffsetx"];
  let BulkSy = 30 + letterData["sbulkoffsety"];
  let MidSx = 30 + letterData["smidoffsetx"];
  let MidSy = 50 + letterData["smidoffsety"];
  let TailSx = 20 + letterData["stailoffsetx"];
  let TailSy = 185 + letterData["stailoffsety"];
  let Extrax = 20 + letterData["extrax"];
  let Extray = 50 + letterData["extray"];
  let Extra2x = 50 + letterData["extra2x"];
  let Extra2y = 40 + letterData["extra2y"];
  let Extra3x = 80 + letterData["extra3x"];
  let Extra3y = 30 + letterData["extra3y"];

  // determine parameters for first stroke

  let Top1x = 90 + letterData["offsetx"];
  let Top1y = 30 + letterData["offsety"];
  let Bulk1x = 60 + letterData["bulkoffsetx"];
  let Bulk1y = 90 + letterData["bulkoffsety"];
  let Mid1x = 90 + letterData["midoffsetx"];
  let Mid1y = 70 + letterData["midoffsety"];
  let Tail1x = 90 + letterData["tailoffsetx"];
  let Tail1y = 185 + letterData["tailoffsety"];
  
  // determine parameters for second stroke

  let Top2x = 100 + letterData["2offsetx"];
  let Top2y = 110 + letterData["2offsety"];
  let Bulk2x = 60 + letterData["2bulkoffsetx"];
  let Bulk2y = 80 + letterData["2bulkoffsety"];
  let Mid2x = 110 + letterData["2midoffsetx"];
  let Mid2y = 105 + letterData["2midoffsety"];
  let Tail2x = 0 + letterData["2tailoffsetx"];
  let Tail2y = 110 + letterData["2tailoffsety"];

  // determine parameters for third stroke

  let Top3x = 20 + letterData["3offsetx"];
  let Top3y = 120 + letterData["3offsety"];
  let Bulk3x = 75 + letterData["3bulkoffsetx"];
  let Bulk3y = 35 + letterData["3bulkoffsety"];
  let Mid3x = 40 + letterData["3midoffsetx"];
  let Mid3y = 35 + letterData["3midoffsety"];
  let Tail3x = 75 + letterData["3tailoffsetx"];
  let Tail3y = 35 + letterData["3tailoffsety"];

   // determine parameters for blot

   let Blotx = 12 + letterData["blotx"];
   let Bloty = 105 + letterData["bloty"];
   let Blotwidth = 5 + letterData["blotwidth"];
   let Blotheight = 10 + letterData["blotheight"];

// draw curved stroke

 noStroke();
  fill(shadowcolor);
  beginShape();
  vertex(BulkSx, BulkSy);
  bezierVertex(TopSx, TopSy, MidSx, MidSy, TailSx, TailSy);
  bezierVertex(Extrax, Extray, Extra2x, Extra2y, Extra3x, Extra3y);
endShape(CLOSE)

  fill(inkcolor);
    // filter(BLUR,0.5);

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

// push()
// translate(45, -20)
// angleMode(RADIANS)
// rotate(0.2)
//   ellipse(155, 221, 20, 40);
//   pop()

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
  vertex(Bulk3x, Bulk3y);
  bezierVertex(Top3x, Top3y, Mid3x, Mid3y, Tail3x, Tail3y);
  endShape(CLOSE)

// draw blot
push()
translate(45, -20)
angleMode(RADIANS)
rotate(0.2)
  ellipse(Blotx, Bloty, Blotwidth, Blotheight);
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
