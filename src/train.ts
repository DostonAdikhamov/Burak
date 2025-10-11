console.log("Task G")
function yuqoriIndex(arr: number[]) {
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }

    return maxIndex;
}

console.log('================================');
console.log("ANSWER ONE:", yuqoriIndex([5, 21, 12, 25, 8]));
console.log("ANSWER TWO:", yuqoriIndex([5, 31, 17, 21, 0]));