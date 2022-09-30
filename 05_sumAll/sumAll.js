const sumAll = function(x, y) {
    let start = Math.min(x, y);
    let end = Math.max(x, y);

    if (x < 0 | 
        y < 0 | 
        !Number.isInteger(x) | 
        !Number.isInteger(y)) {
        return("ERROR");
    }

    let result = 0;
    for (i = start; i <= end; i++) {
        result += i;
    }
    return(result);
};

// Do not edit below this line
module.exports = sumAll;
