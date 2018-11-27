

function confirmEnding(str, target) {
  var endOfStr = str.slice(-target.length)


  if (endOfStr === target){
    return true
  }
  return false;
}

console.log(confirmEnding("Bastian", "n"));