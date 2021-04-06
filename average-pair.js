// add whatever parameters you deem necessary
function averagePair(sortedArr, targetAvg) {
    let startPointer = 0;
    let endPointer = sortedArr.length - 1;

    while (startPointer < (sortedArr.length - 1) && endPointer >= 0) {
        if ((sortedArr[startPointer] + sortedArr[endPointer]) / 2 < targetAvg) startPointer++;
        if ((sortedArr[startPointer] + sortedArr[endPointer]) / 2 > targetAvg) endPointer--;
        if ((sortedArr[startPointer] + sortedArr[endPointer]) / 2 === targetAvg) return true;
    }
    return false;
}
