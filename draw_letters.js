/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3e1dc";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */


const inkcolor  = "#000000";
const shadowcolor  = "#858585";
// const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

    
  // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = 50  + letterData["offsetx"];
  // let pos2y = 150 + letterData["offsety"];

  // draw two circles
  // fill(darkGreen);
  // ellipse(50, 150, 75, 75);
  // fill(lightGreen);
  // ellipse(pos2x, pos2y, size2, size2);

  
  // color/stroke setup
  // stroke(strokeColor);
  // strokeWeight(4);

  // determine parameters for shadow stroke

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

  fill(shadowcolor);
  beginShape();
  vertex(BulkSx, BulkSy);
  bezierVertex(TopSx, TopSy, MidSx, MidSy, TailSx, TailSy);
  bezierVertex(Extrax, Extray, Extra2x, Extra2y, Extra3x, Extra3y);
endShape(CLOSE)

  fill(inkcolor);
    // filter(BLUR,4);

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


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
