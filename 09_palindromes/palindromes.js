const palindromes = function (string) {
    let cleanedString = string.toLowerCase().replace(/[^0-9a-z]/gi, '')
    
    let reversed = cleanedString.split("").reverse().join("")

    return cleanedString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
