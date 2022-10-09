const findTheOldest = function(array) {
    oldest = array.map(person => {
        return {...person, age: getAge(person.yearOfBirth, person.yearOfDeath)}
    }).sort(function(a,b) {
      return a.age > b.age ? -1 : 1;
    });

    return oldest[0];
};

const getAge = function(birth, death){
    if (!death) {
        death = (new Date).getFullYear()
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
