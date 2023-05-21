const assert = require("assert");
describe("Testing GetPositionOfGreaterNumber", function () {
  it("should return : 12", function () {
    const res = GetPositionOfGreaterNumber([
      { id: 12, nb: 5 },
      { id: 22, nb: 25 },
    ]);
    assert.strictEqual(res, 22);
  });
  it("should return : your table is empty", function () {
    const res = GetPositionOfGreaterNumber([]);
    assert.strictEqual(res, "your table is empty");
  });
  it("should return : your table is undefined", function () {
    const res = GetPositionOfGreaterNumber();
    assert.strictEqual(res, "your table is undefined");
  });
  it("should return : your table is not array of Object", function () {
    const res = GetPositionOfGreaterNumber([1, 2, 3]);
    assert.strictEqual(res, "your table is not array of Object");
  });
  it("should return : ", function () {
    const res = GetPositionOfGreaterNumber([
      { id: 12, nb: 5, x: 2 },
      { id: 22 },
      {},
    ]);
    assert.strictEqual(res, "your object isn't valid");
  });
});
