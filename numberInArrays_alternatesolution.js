function largestOfFour(arr) {
    // create a new array to store largest number
    // sort array so highest number is always 0
    // push number at index 0 to the new largets umber array
    
    var largestNums = []
    
    for (var i in arr) {
        arr[i].sort((a, b) => {
            return b - a;
        });
        
        largestNums.push(arr[i][0])
    }
    return largestNums;
}