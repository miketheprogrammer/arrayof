Array.of = module.exports = Array.of || function () {
  var array = new Array(arguments.length)
  for (n = 0; n < arguments.length; n += 1){
    array[n] = arguments[n];
  }
  return array;
};