/*

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

*/

function confirmEnding(str, target) {
  var strToArr = target.split('');
  var subStr = str.substring(str.length - strToArr.length);
  if (subStr === target) {
    return true;
  }
  return false;
}

confirmEnding('Bastian', 'an'); // should return true
confirmEnding('Open sesame', 'same'); //should return true
confirmEnding('Open sesame', 'sage'); // should return false
