/***************************************************************************
Write a function arraySumN(ary, n) which takes as ary a 2-dimensional array
and as n a number. ary is an array of arrays of numbers. The function returns
the indices of the inner arrays whose elements sum to n.
Example 1:
var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
var results1 = arraySumN(ary1, 1);
results1; // => [0, 2]
Example 2:
var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
arraySumN(ary2, 6); // => [0, 3]
***************************************************************************/

function arraySumN(array, n) {
  indices = [];
  // your code here...
  for (var i = 0; i < array.length; i++) {
    innerArrSum = 0;
    for (var j = 0; j < array[i].length; j++) {
      // let innerArrSum = 0;
      innerArrSum += array[i][j];
      console.log("The sum of the elements of the inner array are: ",innerArrSum);
    }
    if (innerArrSum === n) {
      indices.push(i);
    }
  }
  return indices;
}


var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
console.log(arraySumN(ary1, 1));


var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
console.log(arraySumN(ary2, 6));
