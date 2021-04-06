// add whatever parameters you deem necessary
function twoArrayObject(keysArr, valuesArr) {
    const formattedObj = {};
    
    for (let i = 0; i < keysArr.length; i++) {
        formattedObj[keysArr[i]] = valuesArr[i] || null;
    }

    return formattedObj;
}
