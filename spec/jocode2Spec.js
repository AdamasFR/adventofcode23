var firstInput = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`

describe("joCode1", function () {
    let runner = new JOCode1();
    it("firstInput", function () {
        res = runner.run(firstInput);
        
        expect(res).toBe(7);
    });
});