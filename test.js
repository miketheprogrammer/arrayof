var test = require('tape');
var arrayOf = require('./index');
test('Array#of Exists', function (t) {
    t.assert(Array.of !== undefined);
    t.end();
});


test('Array.of returns the correct array', function(t) {
    var expect = [1,2,{name: 'michael'}, 3, 4];

    var result = Array.of(1,2,{name: 'michael'}, 3, 4);

    t.same(result, expect);
    t.end();
});

test('arrayOf return the correct array', function(t) {
    var expect = [1,2,{name: 'michael'}, 3, 4];

    var result = arrayOf(1,2,{name: 'michael'}, 3, 4);

    t.same(result, expect);
    t.end();
});