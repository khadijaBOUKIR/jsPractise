function GetPositionOfGreaterNumber(table) {
    const tableOfNumbers = extractNumbersFromArray(table)
    return returnedLargestNb(tableOfNumbers, table)
}

function extractNumbersFromArray(table) {
    let tableOfNumbers = [];

    for (let j = 0; j < table.length; j++) {
        tableOfNumbers[j] = table[j].nb;
    }
    return tableOfNumbers
}

function returnedLargestNb(tableOfNumbers, table) {
    let theLargest = tableOfNumbers[0];
    for (let i = 0; i < tableOfNumbers.length; i++) {
        if (theLargest < tableOfNumbers[i])
            theLargest = tableOfNumbers[i]
    }
    return returnedLargestID(table, theLargest)
}

function returnedLargestID(table, theLargest) {
    let id = 0;
    for (let k = 0; k < table.length; k++) {
        if (table[k].nb === theLargest)
            id = table[k].id
    }
    return id
}
console.log("the id of the largest of the [ { id: 11, nb: 5 }, { id: 1, nb: 13 }, { id: 12, nb: 0 }, { id: 31, nb: 75 }] is: ",
    GetPositionOfGreaterNumber([
        { id: 11, nb: 5 },
        { id: 1, nb: 13 },
        { id: 12, nb: 0 },
        { id: 31, nb: 75 }
    ])
);

console.log("the id of the largest of the [ { id: 10, nb: 105 }, { id: 51, nb: 13 }, { id: 28, nb: 0 }, { id: 63, nb: 75 }] is: ",
    GetPositionOfGreaterNumber([
        { id: 10, nb: 105 },
        { id: 51, nb: 13 },
        { id: 28, nb: 0 },
        { id: 63, nb: 75 }
    ])
);