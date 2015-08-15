var JS = require('jstest');
var IntegerSequence = require('./integer-sequence');

JS.Test.describe('Integer Sequence', function() { with(this) {

  it('wraps after Number.MAX_SAFE_INTEGER', function() { with(this) {
    var a = new IntegerSequence(Number.MAX_SAFE_INTEGER);

    assertEqual(a.next(), Number.MIN_SAFE_INTEGER);
  }});

  it('wraps before Number.MIN_SAFE_INTEGER', function() { with(this) {
    var a = new IntegerSequence(Number.MIN_SAFE_INTEGER);

    assertEqual(a.prev(), Number.MAX_SAFE_INTEGER);
  }});

  it('step argument could be passed to .next/.prev', function() { with(this) {
    var a = new IntegerSequence;

    assertEqual(a.value, 0);
    assertEqual(a.next(2), 2);
    assertEqual(a.prev(5), -3);
  }});
}});

JS.Test.autorun();
