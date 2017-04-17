
/*************************************************************
Write a function `divisibleByThreePairSum(array)` that takes
an array of numbers. It should return an array of all the
pairs of indices whose sum is a multiple of three.

Examples:
> divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
[[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

> divisibleByThreePairSum([8, 3, 5, 9, 2]);
[[1, 3]]
*************************************************************/

// your code here...

function divisibleByThreePairSum(array) {
  let pairs = []

  for (let i = 0; i < array.length - 1; i++) { //we add the -1 to the length of the array here because without it on the last interation of the outer loop the inner loop automatically fails its condition so the code doesnt do anything
    for (var j = i + 1; j < array.length; j++) { //Having j start at i + 1 here is key this assures that we dont double count(set it equal to 0 for a crude factorial function)
      if ((array[i] + array[j]) % 3 === 0) {
        pairs.push([i,j]);
      }
    }
  }
  return pairs;
}

// console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0]));
//
//
// console.log(divisibleByThreePairSum([8, 3, 5, 9, 2]));


/*************************************************************
Write a function `peakFinder(array)` that takes in an array of
numbers. It should return an array containing the indices of
all the peaks. A peak is an element that is greater than both
of its neighbors. If it is the first or last element, it is
a peak if it is greater than its one neighbor. Assume the
array has a length of at least 2. Writing this function does
not require a nested loop.

Examples:
> peakFinder([1,2,3,2,1])
[2]

> peakFinder([2,1,2,3,4,5])
[0, 5]

> peakFinder([4,6,9,4,2,-7,2,-4,5])
[2, 6, 8]
*************************************************************/

// initial attempt
//
function peakFinder_2(array) {
  let peaks = []
  let startPeak = array[0];
  let endPeak = array[array.length - 1];
  for (var i = 0; i < array.length; i++) {
    let peak = array[i];
    if (startPeak > array[i+1]) {
      peaks.push(startPeak)
  }
  if (peak > array[i - 1] && peak > array[i+1]) {
    peaks.push(peak);
  }
  if (array[array.length - 2] < endPeak) {
    peaks.push(endPeak)
  }
}
return peaks;
}


//Corrections:
// "i" is the index array[i] is the value at that index
function peakFinder(array) {
  let peaks = [];
  for (var i = 0; i < array.length; i++) {
    let ele = array[i];

    if (i === 0 && ele > array[i+1]) { //are we at the first index?
      peaks.push(i);
    }else if (i === array.length - 1 && ele > array[i - 1]) {// are we at the last index?
      peaks.push(i);
    }else if (ele > array[i + 1] && ele > array[i - 1]) {// we are inbetween the first and last index
      peaks.push(i);
    }
  }
  return peaks;
}

//another solution
function peakFinder_3(array) {
  var peaks = [];

  for (var i = 0; i < array.length; i += 1) {
    var center = array[i];
    var left = array[i - 1];
    var right = array[i + 1];

    if (i === 0 && center > right) { // first element
        peaks.push(i);
    } else if ((i === array.length - 1) && (center > left)) { // last element
        peaks.push(i);
    } else if ((center > left) && center > right) {
        peaks.push(i);
    }
  }

  return peaks;
}

console.log(peakFinder([1,2,3,2,1]));


console.log(peakFinder([2,1,2,3,4,5]));


console.log(peakFinder([4,6,9,4,2,-7,2,-4,5]));
