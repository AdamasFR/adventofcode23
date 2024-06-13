class JOCode1 {

    run(input) {
        var lines = input.split("\n");
        var index = 0;
        var pos = 0;

        while(index < lines.length -1) {
            let currentPosition = lines[index];
            lines[index] = lines[index] + 1;
            index = currentPosition + index;
            
            console.log(currentPosition)
            pos = pos +1;
        }

        return index;
    }
}