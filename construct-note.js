// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    const lettersFreqMap = createFreqMap(letters.split(""));
    for (const char of msg) {
        if (lettersFreqMap[char] && lettersFreqMap[char] > 0) {
            lettersFreqMap[char]--;
        } else {
            return false;
        }
    }
    return true;
}

function createFreqMap(arr) {
    const freqMap = {}
    for (const letter of arr) {
        freqMap[letter] = freqMap[letter] + 1 || 1;
    }
    return freqMap;
}

constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")