function search(table) {
    let theLargest = [];
    for (let j = 0; j < table.length; j++) {
        theLargest[j] = table[j].nb;
    }
    return returnedLargest(theLargest)
}

function returnedLargest(table) {
    let nb = 0;
    for (let i = 0; i < table.length; i++) {
        if (table[i] > table[i + 1]) {
            nb = table[0]
        } else nb = table[1]
    }
    return nb
}
console.log(
    search([
        { id: 2, nb: 5 },
        { id: 0, nb: 13 },
        { id: 1, nb: 0 },
        { id: 2, nb: 75 },
    ])
);