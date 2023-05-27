const assert = require("assert");

function GetPositionOfGreaterNumber(table) {
    if (table === undefined) {
        return "your table is undefined";
    }

    if (table.length === 0) {
        return "your table is empty";
    }
    let isArrayOfObject = true;
    for (const element of table) {

        if (typeof element !== "object") {
            isArrayOfObject = false;
        }
        if (!isArrayOfObject) return "your table is not array of Object";
        if (typeof element === "object" && Object.keys(element).length === 0) return "your object is empty";
        for (let i = 0; i < table.length; i++) {
            if (!(table[i].id && table[i].nb))
                return "your object isn't valid"
            if (Object.keys(table[i]).length !== 2)
                return "its not the true structure"
        }

        const tableOfNumbers = extractNumbersFromArray(table);
        return returnedLargestNb(tableOfNumbers, table);
    }
}

function extractNumbersFromArray(table) {
    let tableOfNumbers = [];

    for (let k = 0; k < table.length; k++) {
        tableOfNumbers[k] = table[k].nb;
    }
    return tableOfNumbers;
}

function returnedLargestNb(tableOfNumbers, table) {
    let theLargest = tableOfNumbers[0];
    if (table.length !== 1) {
        for (let k = 0; k < tableOfNumbers.length; k++) {
            if (theLargest < tableOfNumbers[k]) theLargest = tableOfNumbers[k];
        }
    }
    return returnedLargestID(table, theLargest);
}

function returnedLargestID(table, theLargest) {
    let id = table[0].id;
    if (table.length !== 1) {
        for (let k = 0; k < table.length; k++) {
            if (table[k].nb === theLargest) id = table[k].id;
        }
    }
    return id;
}

describe("Testing GetPositionOfGreaterNumber", function() {
    it("should return : 22", function() {
        const res = GetPositionOfGreaterNumber([
            { id: 12, nb: 5 },
            { id: 22, nb: 25 },
        ]);
        assert.strictEqual(res, 22);
    });
    it("should return : your table is empty", function() {
        const res = GetPositionOfGreaterNumber([]);
        assert.strictEqual(res, "your table is empty");
    });
    it("should return : your table is undefined", function() {
        const res = GetPositionOfGreaterNumber();
        assert.strictEqual(res, "your table is undefined");
    });
    it("should return : your table is not array of Object", function() {
        const res = GetPositionOfGreaterNumber([1, 2, 3]);
        assert.strictEqual(res, "your table is not array of Object");
    });
    it("should return : its not the true structure", function() {
        const res = GetPositionOfGreaterNumber([{ id: 12, nb: 5, x: 2 }]);
        assert.strictEqual(res, "its not the true structure");
    });
    it("should return : your object isn't valid ", function() {
        const res = GetPositionOfGreaterNumber([{ id: 22 }]);
        assert.deepStrictEqual(res, "your object isn't valid");
    });
    it("should return : your object is empty", function() {
        const res = GetPositionOfGreaterNumber([{}]);
        assert.strictEqual(res, "your object is empty");
    });
});