function GetPositionOfGreaterNumber(table) {
    if (table !== undefined && table.length > 0) {
        const tableOfNumbers = extractNumbersFromArray(table)
        return returnedLargestNb(tableOfNumbers, table)
    }
    return 'your table is empty or undefined'
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
    let id = table[0].id;
    for (let k = 0; k < table.length; k++) {
        if (table[k].nb === theLargest)
            id = table[k].id
    }
    return id
}