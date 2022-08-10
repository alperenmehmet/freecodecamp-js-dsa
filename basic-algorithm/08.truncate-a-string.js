/*

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

*/

function truncateString(str, num) {
  var newStr = str.slice(0, num) + '...';
  if (str.length > num) {
    return newStr;
  } else {
    return str;
  }
}

truncateString('A-tisket a-tasket A green and yellow basket', 8); // should return "A-tisket..."

truncateString(
  'A-tisket a-tasket A green and yellow basket',
  'A-tisket a-tasket A green and yellow basket'.length
); // should return the string A-tisket a-tasket A green and yellow baske

truncateString(
  'A-tisket a-tasket A green and yellow basket',
  'A-tisket a-tasket A green and yellow basket'.length + 2
); // should return the string A-tisket a-tasket A green and yellow basket
