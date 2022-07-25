/*

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

*/

function titleCase(str) {
  var newStr = str.split(' ');
  var newArr = [];
  for (var i = 0; i < newStr.length; i++) {
    var element = newStr[i];
    var firstCase = element[0].toUpperCase();
    var updatedStr = firstCase + element.slice(1).toLowerCase();
    newArr.push(updatedStr);
  }
  return newArr.join(' ');
}

titleCase("I'm a little tea pot"); // should return a string.
titleCase("I'm a little tea pot"); // should return the string I'm A Little Tea Pot.
titleCase('sHoRt AnD sToUt'); // should return the string Short And Stout.
titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // should return the string Here Is My Handle Here Is My Spout
