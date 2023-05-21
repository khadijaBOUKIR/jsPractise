function search(table) {
    let theLargest = [];
    for (let j = 0; j < table.length; j++) {
        theLargest[j] = table[j].nb;
    }
    return returnedLargest(theLargest) // return nb
}

function returnedLargest(tab) {
    let nb = tab[0];
    for (let i = 0; i < tab.length; i++) {
        if (nb < tab[i])
            nb = tab[i]

    }
    return nb //?
}
console.log("the largest is :",
    search([
        { id: 0, nb: 5 },
        { id: 1, nb: 13 },
        { id: 2, nb: 0 },
        { id: 3, nb: 75 }
    ])
);

console.log("the largest is :",
    search([
        { id: 0, nb: 105 },
        { id: 1, nb: 13 },
        { id: 2, nb: 0 },
        { id: 3, nb: 75 }
    ])
);