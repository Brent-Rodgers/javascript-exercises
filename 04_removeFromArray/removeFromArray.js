const removeFromArray = function(array, ...args) {
    for (valueToRemove of args){
        let indexToRemove = array.indexOf(valueToRemove);
        if (indexToRemove != -1) {
            array.splice(indexToRemove, 1);
        }
    }

    return(array);
};

// Do not edit below this line
module.exports = removeFromArray;
