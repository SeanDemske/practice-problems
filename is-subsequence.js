// add whatever parameters you deem necessary
function isSubsequence(subStr, string) {
    let subStrIdx = 0;
    for (const char of string.split("")) {
        if (subStrIdx === subStr.length) return true;
        if (char === subStr[subStrIdx]) {
            subStrIdx++;
        } else {
            subStrIdx = 0;
        }
        console.log(char, subStrIdx);
    }
    return subStrIdx === subStr.length ? true : false;
}