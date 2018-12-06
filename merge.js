var lines = [];
var generator;
var prevSorted;
var sorted;

function setup() {
  createCanvas(500, 200);
  frameRate(20);
  for (var i = 0; i < width; i++) {
    lines.push(random(height));
  }
  generator = gMergeSort(lines);
}

function draw() {
  background(0);
  if (sorted) {
    prevSorted = sorted;
  }
  sorted = generator.next().value;
  if (sorted) {
    var start = sorted[1];
    var end = sorted[2];
    // var sorted = generator.next().value;

    for (var i = 0; i < sorted[0].length; i++) {
      if (i >= start && i <= end) {
        stroke(255, 0, 0);
      } else {
        stroke(255);
      }
      line(i, height, i, height - sorted[0][i]);
    }
  } else {
    for (var i = 0; i < prevSorted[0].length; i++) {
      stroke(255);
      line(i, height, i, height - prevSorted[0][i]);
    }
  }
}


function* gMergeSort(arr) {
  yield arr;
  var i = 1;
  while (i < arr.length) {
    var j = 0;
    while (j < arr.length) {
      var left = arr.slice(j, j + i);
      var right = arr.slice(j + i, j + i * 2);
      var merged = merge(left, right);
      // arr = merged.concat(arr.slice(j + i * 2));
      // yield arr;
      var beginning = arr.slice(0, j);
      var end = arr.slice(j + i * 2);
      arr = beginning.concat(merged).concat(end);
      // console.log(arr.slice(j + i * 2) || []);

      yield [arr, j, j + i * 2];
      j += i * 2;
    }
    i *= 2;
  }
}




// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//
//   var mid = Math.floor(arr.length / 2);
//   var left = mergeSort(arr.slice(0, mid));
//   var right = mergeSort(arr.slice(mid, arr.length));
//
//   return merge(left, right);
// }
//
function merge(left, right) {
  var merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return merged.concat(left).concat(right);
}
