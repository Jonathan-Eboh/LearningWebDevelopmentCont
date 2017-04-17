/*************************************************************
Write a function logEach(array) that prints every element
of the array and its index to the console.

Examples:
> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson
*************************************************************/

function logEach(array) {
  // your code here...
  for (var i = 0; i < array.length; i++) {
    console.log(i+":", array[i]);
  }

}

// test cases:


logEach(["Anthony", "John", "Carson"]);



/*************************************************************
Write a function maxValue(ary) that returns the largest
value in the ary. ary is an array of numbers.

Examples:
> maxValue([12, 6, 43, 2])
43

> maxValue([])
null

> maxValue([-4, -10, 0.43])
0.43
*************************************************************/

function maxValue(array) {
  // your code here...

  if (array.length === 0) { // check to see if is an empty array
    return null;
  }

  let max = array[0]
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i]
    }
  }
  return max
}

// test cases:

console.log(maxValue([12, 6, 43, 2]));


console.log(maxValue([]));


console.log(maxValue([-4, -10, 0.43]));


/*************************************************************
Write a function printRange(start, end) that prints all
the numbers from start to end. If a range doesn't exist
(start > end), then print "Bad Range" instead.

Examples:
> printRange(22, 24)
22
23
24

> printRange(5, 1)
Bad Range
*************************************************************/

function printRange(start, end) {
  // your code here...
  if (start > end) {
    // console.log("cat");
    console.log("Sorry, bad range");
    return
  }
    for (var i = start; i <= end; i++) { //needs to include end
      // console.log("dog");
      console.log(i);
    }

  return
}

// test cases:


printRange(22, 24)


printRange(5, 1)
