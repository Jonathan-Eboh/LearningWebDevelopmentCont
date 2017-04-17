'user strict'


function pairZero(array) {
  let pairs = []

  for (let i = 0; i < array.length - 1; i++) { //we add the -1 to the length of the array here because without it on the last interation of the outer loop the inner loop automatically fails its condition so the code doesnt do anything
    for (var j = i + 1; j < array.length; j++) { //Having j start at i + 1 here is key this assures that we dont double count(set it equal to 0 for a crude factorial function)
      if (array[i] + array[j] === 0) {
        let pair = [i,j];
        pairs.push(pair);
      }
    }
  }
  return pairs;
}


var ary1 = [5, -5, 2, -2];
console.log(pairZero(ary1)); // => [[0, 1], [2, 3]]

var ary2 = [0, 0, 0];
console.log(pairZero(ary2)); // => [[0, 1], [0, 2], [1, 2]]
