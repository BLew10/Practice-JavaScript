function alwaysHungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'food') {
            console.log('yummy')
        } else {
            console.log("I'm hungry")
        }
    }
}

function highPass(arr, cutoff) {
    var filterArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filterArray.push(arr[i])
        }

    }

    return filterArray
}


function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    var average = sum / arr.length;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }
    return count;
}





function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let current = arr[i]
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = current;
    }
    return arr;
}

function fibonacciArray(n){
    var fibArr = [0,1];
    for(var i = 0;  i < n-2; i++){
        fibArr.push(fibArr[i]+fibArr[i+1])
    }

    return fibArr;
}

console.log(fibonacciArray(11))   