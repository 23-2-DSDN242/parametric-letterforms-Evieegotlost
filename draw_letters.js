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

  
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);
  // determine parameters for first stroke
  let size1 = letterData["size"];
  let pos1x = posx + letterData["offsetx"];
  let pos1y = posy + letterData["offsety"];

    // determine parameters for second stroke
    let size2 = letterData["size"];
    let pos2x = posx + letterData["offsetx"];
    let pos2y = posy + letterData["offsety"];

    
  // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = 50  + letterData["offsetx"];
  // let pos2y = 150 + letterData["offsety"];

  // draw two circles
  // fill(darkGreen);
  // ellipse(50, 150, 75, 75);
  // fill(lightGreen);
  // ellipse(pos2x, pos2y, size2, size2);
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
