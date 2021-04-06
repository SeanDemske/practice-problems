// add whatever parameters you deem necessary
function countPairs(arr, num) {
    arr.sort((a, b) => a - b);
    let startPointer = 0;
    let endPointer = arr.length - 1;
    let count = 0;
    while (endPointer > startPointer) {
        console.log(arr[startPointer], arr[endPointer]);
        if (arr[startPointer] + arr[endPointer] === num) {
            count++;
            endPointer--;
        } 
        else if (arr[startPointer] + arr[endPointer] > num) endPointer--;
        else if (arr[startPointer] + arr[endPointer] < num) startPointer++;
    }
    return count;
}

countPairs([0,2,4,6,8,10], 10)
