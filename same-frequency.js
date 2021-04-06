// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const num1FreqMap = createFreqMapFromNumbers(num1)
    const num2FreqMap = createFreqMapFromNumbers(num2);
    return objectsAreEqual(num1FreqMap, num2FreqMap);
}

function objectsAreEqual(obj1, obj2) {
    for (key in obj1) {
        if (obj1[key] !== obj2[key]) return false
    }
    return true;
}

function createFreqMapFromNumbers(num) {
    numArr = Array.from(String(num), Number);
    const freqMap = {}
    for (const num of numArr) {
        freqMap[num] = freqMap[num] + 1 || 1;
    }
    return freqMap;
}

sameFrequency(34, 14);