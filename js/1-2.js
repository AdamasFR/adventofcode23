class Day1Part2 {
    run(input) {
        var lines = input.split("\n");
        var coordinatesArray = [];

        lines.forEach(element => {
            var chars = element.split('');

            var firstElement = 0;
            var secondElement = 0;
            var coordinates = 0;

            for (let index = 1; index <= chars.length; index++) {
                var working = element.substring(0, index);

                if (this.isMatchNumber(working) != undefined) {
                    firstElement = this.isMatchNumber(working, true);
                    break;
                }
            }

            for (let index = chars.length; index => 0; index--) {
                var working = element.substring(index, chars.length + 1);

                if (this.isMatchNumber(working) != undefined) {
                    secondElement = this.isMatchNumber(working, false);
                    break;
                }
            }

            var coordinates = firstElement + "" + secondElement;

            coordinatesArray.push(coordinates);
        });

        console.log(coordinatesArray)

        var sumCoordinates = 0;

        coordinatesArray.forEach(element => {
            sumCoordinates = parseInt(sumCoordinates) + parseInt(element);
        })

        console.warn("The final sum is : " + sumCoordinates);

        return sumCoordinates;
    }

    isMatchNumber(line, first) {
        var matchs = [];

        matchs.push(line.match("1"))
        matchs.push(line.match("2"))
        matchs.push(line.match("3"))
        matchs.push(line.match("4"))
        matchs.push(line.match("5"))
        matchs.push(line.match("6"))
        matchs.push(line.match("7"))
        matchs.push(line.match("8"))
        matchs.push(line.match("9"))

        matchs.push(line.match("one"))
        matchs.push(line.match("two"))
        matchs.push(line.match("three"))
        matchs.push(line.match("four"))
        matchs.push(line.match("five"))
        matchs.push(line.match("six"))
        matchs.push(line.match("seven"))
        matchs.push(line.match("eight"))
        matchs.push(line.match("nine"))

        matchs = matchs.filter(match => match != null);

        if (first) {
            matchs = matchs.sort((a, b) => {
                return a.index - b.index
            });
        } else {
            matchs = matchs.sort((b, a) => {
                return a.index - b.index
            });
        }

        if (matchs[0] != undefined) {
            return this.replaceNumber(matchs[0][0]);
        }

        return undefined;

    }

    replaceNumber(line) {
        var res = "";
        switch (line) {
            case "one":
                res = res + "" + 1;
                break;
            case "two":
                res = res + "" + 2;
                break;
            case "three":
                res = res + "" + 3;
                break;
            case "four":
                res = res + "" + 4;
                break;
            case "five":
                res = res + "" + 5;
                break;
            case "six":
                res = res + "" + 6;
                break;
            case "seven":
                res = res + "" + 7;
                break;
            case "eight":
                res = res + "" + 8;
                break;
            case "nine":
                res = res + "" + 9;
                break;
            default:
                res = line;
                break;
        }
        return res;
    }
}