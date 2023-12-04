class Day2Part1 {

    run(input) {
        var lines = input.split("\n");
        let countPossible = 0;
        var index = 0;

        lines.forEach(element => {
            let regexGame = /^(.*?.:.)/mg;
            var gameNumber = regexGame.exec(element)[0];
            gameNumber = gameNumber.replace("Game ", "").replace(":", "");
            
            element = element.replace(regexGame, "");

            index++;

            let sets = element.split("; ");

            let setIndex = 0;
            let setPossible = 0;
            
            sets.forEach(set => {
                let regexGreen = /[0-9]+ green/g;
                let regexRed = /[0-9]+ red/g;
                let regexBlue = /[0-9]+ blue/g;

                let nbGreen = 0;
                let regexNbGreen = regexGreen.exec(set);
                if(regexNbGreen != null){
                    nbGreen = regexNbGreen[0].split(" green")[0];
                }

                let nbRed = 0;
                let regexNbRed = regexRed.exec(set);
                if(regexNbRed != null){
                    nbRed = regexNbRed[0].split(" red")[0];
                }

                let nbBlue = 0;
                let regexNbBlue = regexBlue.exec(set);
                if(regexNbBlue != null){
                    nbBlue = regexNbBlue[0].split(" blue")[0];
                }

                //12 red cubes, 13 green cubes, and 14 blue cubes?
                if(parseInt(nbRed) <= 12 && parseInt(nbGreen) <= 13 && parseInt(nbBlue) <= 14){
                    setPossible++;
                }
                setIndex++;
            });

            console.log("For Game "+ gameNumber + ", there was " + setIndex + " sets, out of all of them, " + setPossible + " were possible.")
            if(setIndex === setPossible){
                console.log(countPossible + "+" + parseInt(gameNumber));
                countPossible = countPossible + parseInt(gameNumber);
                console.log("= " + countPossible);
            }
            

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