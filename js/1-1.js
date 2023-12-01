var day1part1 = function run(input) {
    var lines = input.split("\n");
    var coordinatesArray = [];

    lines.forEach(element => {
        var numbers = element.replace(/\D+/g, '');
        var length = numbers.length;

        var firstElement = numbers.charAt(0);
        var secondElement = numbers.charAt(length - 1);

        var coordinates = firstElement + "" + secondElement;

        coordinatesArray.push(coordinates);
    });


    var sumCoordinates = 0;

    coordinatesArray.forEach(element => {
        sumCoordinates = sumCoordinates + parseInt(element);
    })

    return sumCoordinates;
}