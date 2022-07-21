/*

Return the length of the longest word in the provided sentence.

Your response should be a number.

*/

function findLongestWordLength(str) {
  var strArr = str.split(' ');
  var newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    var el = strArr[i].length;
    newArr.push(el);
  }
  var longestNumber = Math.max(...newArr);
  return longestNumber;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
