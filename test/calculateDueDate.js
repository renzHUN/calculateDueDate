var chai = require("chai"),
    expect = chai.expect,
    calculator = require("../app/calculateDueDate");
    chai.use(require('chai-datetime'));

describe("Calculate due date", function() {
    it("Within on working day, 2 working hours", function() {
        var sameDay = calculator.calculateDueDate(new Date(2016, 2, 1, 12, 2), 2);
        expect(sameDay).to.equalDate(new Date(2016, 2, 1, 14, 2));
    });
    it("One working day, 8 working hours", function() {
        var nextDay = calculator.calculateDueDate(new Date(2016, 2, 1, 12, 2), 8);
        expect(nextDay).to.equalDate(new Date(2016, 2, 2, 12, 2));
    });
    it("One workweek, 40 working hours", function() {
        var oneWeek = calculator.calculateDueDate(new Date(2016, 2, 1, 12, 2), 40);
        expect(oneWeek).to.equalDate(new Date(2016, 2, 8, 12, 2));
    });
    it("Two workweeks, 80 working hours", function() {
        var twoWeek = calculator.calculateDueDate(new Date(2016, 2, 1, 12, 2), 80);
        expect(twoWeek).to.equalDate(new Date(2016, 2, 15, 12, 2));
    });
});