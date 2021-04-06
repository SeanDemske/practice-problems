// add whatever parameters you deem necessary
function separatePositive(numsArr) {
    let startPointer = 0;
    let endPointer = numsArr.length - 1;

    while (endPointer >= startPointer) {
        if (numsArr[startPointer] > 0 && numsArr[endPointer] < 0) {
            startPointer++;
            endPointer--;
        } else if (numsArr[startPointer] < 0 && numsArr[endPointer] > 0) {
            // Swap
            let temp = numsArr[startPointer];
            numsArr[startPointer] = numsArr[endPointer];
            numsArr[endPointer] = temp;
            startPointer++;
            endPointer--;
        } else if (numsArr[startPointer] < 0 && numsArr[endPointer] < 0) {
            endPointer--;
        } else if (numsArr[startPointer] > 0 && numsArr[endPointer] > 0) {
            startPointer++;
        } else {
            endPointer--;
        }
    }
    return numsArr;
}
