var firstInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

describe("day3Part1", function () {
    let runner = new Day3Part1();
    it("firstInput", function () {
        res = runner.run(firstInput);
        expect(res).toBe(4361);
    });
});