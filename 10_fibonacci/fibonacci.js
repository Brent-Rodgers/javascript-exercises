const fibonacci = function(num) {
    let previous = 0;
    let current = 1;
    let next;

    if (num < 0) return "OOPS";
    if (num === 0) return 0;

    for (let i = 1; i < num; i++){
        next = current + previous;
        previous = current;
        current = next;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
