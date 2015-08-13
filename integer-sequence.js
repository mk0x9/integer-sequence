function IntegerSequence(number) {
  this.value = number || 0;
}

IntegerSequence.prototype = {};

IntegerSequence.prototype.constructor = IntegerSequence;

IntegerSequence.prototype.wrap = function(adder) {
  var border = adder > 0 ?
               Number.MAX_SAFE_INTEGER :
               Number.MIN_SAFE_INTEGER,
      v = this.value;
  if (Math.abs(v + adder) > Math.abs(border)) {
    v = v + adder - border - border + (adder > 0 ? -1 : 1);
  } else {
    v += adder;
  }
  return this.value = v;
};

IntegerSequence.prototype.next = function(i) {
  return this.wrap(i || 1);
};

IntegerSequence.prototype.prev = function(i) {
  return this.wrap((-i) || -1);
};

module.exports = IntegerSequence;
