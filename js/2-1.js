class Day2Part1 {
    regex = {
        game: /^(.*?.:)/mg
    }

    run(input) {
        var lines = input.split("\n");
        var countPossible = 0;

        lines.forEach(element => {
            let gameRgx = this.regex.game.exec(element);
            let gameNb = gameRgx[0].replace("Game ", "").replace(":", "")

            console.log(gameNb);

        });

        console.warn("The sum is : " + countPossible);

        return countPossible
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