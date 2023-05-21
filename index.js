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
    return returnedLargestID(theLargest) //?
}

function returnedLargestID(tableau) {
    nb
    return nb //?
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