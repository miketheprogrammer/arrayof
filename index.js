Array.of = module.exports = Array.of || function () {
  var array = new Array(arguments.length)
  for (var key in arguments) {
    array[parseInt(key)] = arguments[key];
  }
  return array;
};