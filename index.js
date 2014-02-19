Array.of = module.exports = Array.of || function () {
  var array = new Array(arguments.length)
  for (n = 0; n < arguments.length; n++){
    array[n] = arguments[n];
  }
  return array;
};