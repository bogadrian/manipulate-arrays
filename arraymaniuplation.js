1) //Eliminate duplicats from array

const array = [1, 2, 3, 4, 3, 5, 2, 8];

//find dupplicates
var findDupplicat = function (array) {
    var counts = [];

    for (var i = 0; i <= array.length; i++) {
        if (counts[array[i]] === array[i]) {
            counts = counts;
        } else if (!counts.includes(array[i])) {
            counts.push(array[i])
        }
    }
    return counts
}
console.log(findDupplicat(array))

 
2) // divide the array in subarrays which begin and end with an integer; find out the sum of each subarray;

const array = [-2, 1, -3, 4, -1, 2, -2, 1, -5, 4];

function bubleSort(array, fn) {
    const result = array.map((el, index) => {
        if (el > 0) {
            return index;
        }
    });
    const arrayIndex = result.filter(el => el !== undefined)
    for (let i = 0; i < arrayIndex.length; i++) {
        const result = array.slice(arrayIndex[i], arrayIndex[i + 1] + 1);

        const sum = result.reduce((acc, curr) => {
            return acc += curr;
        }, 0)
        fn(sum)
    }
}

bubleSort(array, function (sum) {

    console.log(sum)

});
