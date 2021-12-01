//Given five positive integers, find the minimum and maximum values
//that can be calculated by summing exactly four of the five integers. 
//Then print the respective minimum and maximum values as a single line
// of two space-separated long integers.

function miniMaxSum(arr) {
    let sortedArray = arr.sort();
    let minSortedArray = sortedArray.slice(1, sortedArray.length + 1);
    let maxSortedArray = sortedArray.slice(0, -1);
    let minSum = minSortedArray.reduce((acc, currentValue) => {
        return acc + currentValue
    })
    let maxSum = maxSortedArray.reduce((acc, currentValue) => {
        return acc + currentValue
    })
    console.log(maxSum, minSum)
}

module.exports = miniMaxSum;

// [1, 2, 3, 4, 5]
// console.log(10, 24)



