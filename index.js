function search(table) {
  let theLargest = [];
  for (let j = 0; j < table.length; j++) {
    theLargest[j] = table[j].nb;
  }
  // for
  return theLargest;
}
console.log(
  search([
    { id: 0, nb: 13 },
    { id: 1, nb: 0 },
    { id: 2, nb: 5 },
  ])
);
