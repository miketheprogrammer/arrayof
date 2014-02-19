Array.of = module.exports = Array.of || function () {
  var array = new Array(arguments.length)
  for (var i = 0; i < arguments.length; i += 1){
    array[i] = arguments[i];
  }
  return array;
};