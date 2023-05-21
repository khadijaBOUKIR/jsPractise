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