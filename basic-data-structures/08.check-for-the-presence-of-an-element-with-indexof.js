/*

Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

For example:

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');

indexOf('dates') returns -1, indexOf('oranges') returns 2, and indexOf('pears') returns 1 (the first index at which each element exists).

*/

// Waiting:The quickCheck function should return a boolean (true or false), not a string ("true" or "false")

function quickCheck(arr, elem) {
  const isHere = arr.indexOf(elem);
  if (isHere === -1) {
    return false;
  }
  return true;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); //quickCheck(["squash", "onions", "shallots"], "mushrooms") should return false
