class Day2Part2 {

    run(input) {
        var lines = input.split("\n");
        var index = 0;
        var sumPower = 0;

        lines.forEach(element => {
            let regexGame = /^(.*?.:.)/mg;
            var gameNumber = regexGame.exec(element)[0];
            gameNumber = gameNumber.replace("Game ", "").replace(":", "");
            
            element = element.replace(regexGame, "");

            index++;

            let sets = element.split("; ");

            let nbGreenArray = [];
            let nbRedArray = [];
            let nbBlueArray = [];
            
            sets.forEach(set => {
                let regexGreen = /[0-9]+ green/g;
                let regexRed = /[0-9]+ red/g;
                let regexBlue = /[0-9]+ blue/g;
                
                let nbGreen = 0;
                let regexNbGreen = regexGreen.exec(set);
                if(regexNbGreen != null){
                    nbGreen = regexNbGreen[0].split(" green")[0];
                    nbGreenArray.push(parseInt(nbGreen));
                }

                let nbRed = 0;
                let regexNbRed = regexRed.exec(set);
                if(regexNbRed != null){
                    nbRed = regexNbRed[0].split(" red")[0];
                    nbRedArray.push(parseInt(nbRed));
                }

                let nbBlue = 0;
                let regexNbBlue = regexBlue.exec(set);
                if(regexNbBlue != null){
                    nbBlue = regexNbBlue[0].split(" blue")[0];
                    nbBlueArray.push(parseInt(nbBlue));
                }
            });
            console.log(nbRedArray);
            console.log(nbGreenArray);
            console.log(nbBlueArray);

            nbGreenArray.sort((a,b) => {
                return a - b
              });
            nbRedArray.sort((a,b) => {
                return a - b
              });
            nbBlueArray.sort((a,b) => {
                return a - b
              });

            let maxNbGreen = parseInt(nbGreenArray[0] != undefined? nbGreenArray[nbGreenArray.length - 1] : 0);
            let maxNbRed = parseInt(nbRedArray[0] != undefined? nbRedArray[nbRedArray.length - 1] : 0);
            let maxNbBlue = parseInt(nbBlueArray[0] != undefined? nbBlueArray[nbBlueArray.length - 1] : 0);

            console.log("red " + maxNbRed + " green " + maxNbGreen + " blue " + maxNbBlue);

            let power = maxNbBlue * maxNbRed * maxNbGreen;
            sumPower = power + sumPower;

            console.log("For Game "+ gameNumber + ", power is " + power);
            

        });

        console.warn("The power is : " + sumPower);

        return sumPower
    }
}