function GetPositionOfGreaterNumber(table) {
    const theLargest = extractNumbersFromArray(table)
    return returnedLargestNb(theLargest) // return nb
}

function extractNumbersFromArray(table) {
    let theLargest = [];

    for (let j = 0; j < table.length; j++) {
        theLargest[j] = table[j].nb;
    }
    return theLargest
}

function returnedLargestNb(tab) {
    let nb = tab[0];
    for (let i = 0; i < tab.length; i++) {
        if (nb < tab[i])
            nb = tab[i]
    }
    return returnedLargestID(tab) //?
}

function returnedLargestID(tableau) {
    let id = tab.indexOf(nb);
    for (let k = 0; k < tableau.length; k++) {

    }
    return id
}
console.log("the largest is :",
    GetPositionOfGreaterNumber([
        { id: 0, nb: 5 },
        { id: 1, nb: 13 },
        { id: 2, nb: 0 },
        { id: 3, nb: 75 }
    ])
);

console.log("the largest is :",
    GetPositionOfGreaterNumber([
        { id: 0, nb: 105 },
        { id: 1, nb: 13 },
        { id: 2, nb: 0 },
        { id: 3, nb: 75 }
    ])
);