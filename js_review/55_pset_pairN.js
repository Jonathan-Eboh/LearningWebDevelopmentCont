/*************************************************************
Write a function pairN(ary, n) which takes the arguments:
  - ary, an array of numbers
  - n, a number

It returns an array containing all the pairs of indices of elements
in the array that sum to n.

Examples:
var ary1 = [5, -5, 2, -2];
pairN(ary1, 0); // => [[0, 1], [2, 3]]

var ary2 = [1, 5, 3, 2, 3]
pairN(ary2, 6); // => [[0, 1], [2, 4]
*************************************************************/

function pairN(array, n) {
  let pairs = []

  for (let i = 0; i < array.length - 1; i++) { //we add the -1 to the length of the array here because without it on the last interation of the outer loop the inner loop automatically fails its condition so the code doesnt do anything
    for (var j = i + 1; j < array.length; j++) { //Having j start at i + 1 here is key this assures that we dont double count(set it equal to 0 for a crude factorial function)
      if (array[i] + array[j] === n) {
        pairs.push([i,j]);
      }
    }
  }
  return pairs;
}


var ary1 = [5, -5, 2, -2];
console.log(pairN(ary1, 0)); // => [[0, 1], [2, 3]]

var ary2 = [1, 5, 3, 2, 3]
console.log(pairN(ary2, 6)); // => [[0, 1], [2, 4]
