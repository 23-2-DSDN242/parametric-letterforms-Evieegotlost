/*******
 * define this "sliderInfo" variable
 * have an entry for each slider you want
 * and each row should be:
 * ["object_field", minimum_bound, maximum_bound]
 */
const sliderInfo = [
  // ["size",       0, 100],
  // ["offsetx",  -30,  30],
  // ["offsety", -100, 100]
  ["offsetx", -100, 100],
  ["offsety", -100, 150],
  ["tailoffsetx", -100, 100],
  ["tailoffsety", -100, 200],
  ["bulkoffsetx", -100, 100],
  ["bulkoffsety", -100, 200],
  ["midoffsetx", -100, 100],
  ["midoffsety", -100, 200],
  ["2offsetx", -100, 100],
  ["2offsety", -100, 200],
  ["2tailoffsetx", -100, 100],
  ["2tailoffsety", -100, 200],
  ["2bulkoffsetx", -100, 100],
  ["2bulkoffsety", -100, 200],
  ["2midoffsetx", -100, 100],
  ["2midoffsety", -100, 200],
  // ["3offsetx", -100, 100],
  // ["3offsety", -100, 200],
  // ["3tailoffsetx", -100, 100],
  // ["3tailoffsety", -100, 200],
  // ["3bulkoffsetx", -100, 100],
  // ["3bulkoffsety", -100, 200],
  // ["3midoffsetx", -100, 100],
  // ["3midoffsety", -100, 200],
  // ["soffsetx", -100, 100],
  // ["soffsety", -100, 200],
  // ["stailoffsetx", -100, 100],
  // ["stailoffsety", -100, 200],
  // ["sbulkoffsetx", -100, 100],
  // ["sbulkoffsety", -100, 200],
  // ["smidoffsetx", -100, 100],
  // ["smidoffsety", -100, 200],
  // ["extrax", -100, 100],
  // ["extray", -100, 200],
  // ["extra2x", -100, 100],
  // ["extra2y", -100, 200],
  // ["extra3x", -100, 100],
  // ["extra3y", -100, 200],
  // ["blotx", -100, 100],
  // ["bloty", -100, 200],
  // ["blotwidth", -100, 100],
  // ["blotheight", -100, 200]
  
];

// PROBABLY DON'T NEED TO EDIT ANYTHING ELSE. STOP HERE.

const numSliders = sliderInfo.length;

if (typeof systemBackgroundColor === 'undefined') {
    var systemBackgroundColor = "#e3eded";
}

// this will use variables if they are already defined
// var systemBackgroundColor = systemBackgroundColor || "#e3eded";

// if everything is defined above, this should just work
function sliderToDataObject() {
  let obj = {};
  for (let i=0; i<numSliders; i=i+1) {
    o_name = sliderInfo[i][0]
    bounds_low = sliderInfo[i][1]
    bounds_high = sliderInfo[i][2]
    obj[o_name] = map(param_sliders[i].value(), 0, 100, bounds_low, bounds_high);
  }
  return obj;
}

let param_sliders = [];

let main_canvas = null;

const canvasWidth = 960;
const canvasHeight = 500;

let debugBox = false;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  for(let i=0; i<numSliders; i++) {
    let cur_row = select("#row" + (i+1))
    cur_row.show();
    let cur_slider = createSlider(0, 100, 50)
    let containerString = "slider" + (i+1) + "Container"
    cur_slider.parent(containerString);
    param_sliders.push(cur_slider);
  }

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);
  button.parent(buttonContainer);
}

function buttonPressedEvent() {
  let obj = sliderToDataObject();
  json = JSON.stringify(obj, null, 2);
  alert(json);
}

function draw () {
  // clear screen
  background(systemBackgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  push();
  scale(2);
  translate(width/4 - 50, 25);

  if (debugBox) {
    noFill()
    strokeWeight(4);
    stroke(0, 200, 0);
    rect(0, 0, 100, 200);
  }

  let obj = sliderToDataObject();
  drawLetter(obj);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
  else if (key == 'd') {
    debugBox = !debugBox;
    // console.log("debugBox is now: " + debugBox);
    redraw();
  }
  else if (key == ' ') {
    let obj = sliderToDataObject();
    json = JSON.stringify(obj, null, 2);
    console.log(json);
  }
}
