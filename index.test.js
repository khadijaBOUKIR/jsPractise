const assert = require('assert');
//function

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
    if (table.length !== 1) {
        for (let i = 0; i < tableOfNumbers.length; i++) {
            if (theLargest < tableOfNumbers[i])
                theLargest = tableOfNumbers[i]
        }
    }
    return returnedLargestID(table, theLargest)
}

function returnedLargestID(table, theLargest) {
    let id = table[0].id;
    if (table.length !== 1) {
        for (let k = 0; k < table.length; k++) {
            if (table[k].nb === theLargest)
                id = table[k].id
        }
    }
    return id
}

//end function
describe('Testing GetPositionOfGreaterNumber', function() {
    it('should return 12', function() {
        // this test will not be run
        const res = GetPositionOfGreaterNumber([{ id: 12, nb: 5 }]);
        assert.strictEqual(res, 12);
    });

    // empty
    it('should return your table is empty or undefined', function() {
        // this test will not be run
        const res = GetPositionOfGreaterNumber([]);
        assert.strictEqual(res, 'your table is empty or undefined');
    });
    // end empty
    it('should return your table is empty or undefined', function() {
        // this test will not be run
        const res = GetPositionOfGreaterNumber([1, 2, 3]);
        assert.strictEqual(res, 'your table is empty or undefined');
    });
    // null
    it('should return your table is empty or undefined', function() {
        // this test will not be run
        const res = GetPositionOfGreaterNumber();
        assert.strictEqual(res, 'your table is empty or undefined');
    });
    // end null
});