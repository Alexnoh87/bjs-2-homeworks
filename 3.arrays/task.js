function compareArrays(arr1, arr2) {
    let result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
    return result;
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender)
    .map(user => user.age)
    .reduce((acc, age, index, arr) => acc + age / arr.length, 0);
    return result;
}