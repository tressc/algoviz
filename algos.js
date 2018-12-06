var lines = [];
var x = 0;
var y;
var z = 0;

function setup() {
  createCanvas(100, 200);
  for (var i = 0; i < width; i++) {
    lines.push(random(height));
  }
}

function draw() {
  z++;
  background(0);

  for (var i = 0; i < lines.length; i++) {
    var l = lines[i];
    if (i === x) {
      stroke(255, 0, 0);
    } else {
      stroke(255);
    }
    line(i, height - l, i, height);
  }


  for (var i = 0; i < 4; i++) {
    if (lines[x] > lines[x + 1]) {
      y = lines[x];
      lines[x] = lines[x + 1];
      lines[x + 1] = y;
      x++;
    } else if (x === lines.length - 1) {
      x = 0;
    } else {
      x++;
    }
  }

}
