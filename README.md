# Integer Sequence
[![Build Status](https://travis-ci.org/mk0x9/integer-sequence.svg?branch=master)](https://travis-ci.org/mk0x9/integer-sequence)

A package providing integer sequence object wrapping range from
`Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`.

## Usage

```javascript
var IntegerSequence = require('integer-sequence');
var seq = new IntegerSequence(5);

seq.next(); // => 6
seq.next(); // => 7
seq.prev(7); // => 0
seq.next(Number.MAX_SAFE_INTEGER); // => 9007199254740991
seq.next(); // => -9007199254740991
```

## License

Creative Commons Zero (CC0).
