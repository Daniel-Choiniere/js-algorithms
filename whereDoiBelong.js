function sortFunction(a,b) { 
    return a - b
}

function getIndexToIns(arr, num) {
	var sorted = arr.sort(sortFunction);
  // console.log(sorted);
  
  if (arr) {
    for (var i=0; i < arr.length; i++) {
		  while (sorted[i] >= num) {
        return i;
      }
    }
  return arr.length
  }
}

getIndexToIns([], 1);