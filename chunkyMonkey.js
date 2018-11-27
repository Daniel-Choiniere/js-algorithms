function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];

  for (var i=0; i<arr.length; i++) {
    console.log(arr.slice(0, size));
  }
 
  console.log(arr);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);