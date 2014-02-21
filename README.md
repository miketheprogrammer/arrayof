arrayof
=======

Array.of  for older browsers and node compat.


[![browser support](https://ci.testling.com/miketheprogrammer/arrayof.png)](https://ci.testling.com/miketheprogrammer/arrayof)



```javascript
npm install arrayof
```


```javascript
var test = require('tape');
var arrayOf = require('arrayof');
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
```

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/miketheprogrammer/arrayof/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

