function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  const result = collection.filter((obj) =>
    sourceKeys.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
  return result;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
); // should return [{ first: "Tybalt", last: "Capulet" }]
