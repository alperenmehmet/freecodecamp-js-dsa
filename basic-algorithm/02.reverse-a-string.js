/*

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

*/

function reverseString(str) {
  let strToArr = str.split('');
  let reverseStr = strToArr.reverse().join('');
  return reverseStr;
}

reverseString('hello'); // "olleh"
