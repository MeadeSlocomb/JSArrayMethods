//Reconstruction of .map method

var dotMap = function(array, inputFunction) {
  var dotMapOutput = [];
  for (var i = 0; i < array.length; i++) {
    dotMapOutput.push(inputFunction(array[i]));
  }
  return dotMapOutput;
};


//Reconstruction of .reduce method

var dotReduce = function(array, inputFunction) {
  valOne = array[0];
  for (var i = 0; i < array.length - 1; i++) {
    var valOne = inputFunction(valOne, array[1 + i]);
  }
  return valOne;
};


//Reconstruction of .filter method

var dotFilter = function(array, inputFunction) {
  filterOutput = [];
  for (var i = 0; i < array.length; i++) {
    if (inputFunction(array[i]) == true) {
      filterOutput.push(array[i]);
  } }
  return filterOutput;
};
