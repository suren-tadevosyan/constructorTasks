function CalcConsstructor() {
  CalcConsstructor.prototype.add = function (val1, val2) {
    return val1 + val2;
  };
  CalcConsstructor.prototype.sub = function (val1, val2) {
    return val1 - val2;
  };
  CalcConsstructor.prototype.mul = function (val1, val2) {
    return val1 * val2;
  };
  CalcConsstructor.prototype.div = function (val1, val2) {
    return val1 / val2;
  };
}

const calculator = new CalcConsstructor();

console.log(calculator.add(3, 5));
console.log(calculator.sub(3, 5));
console.log(calculator.mul(3, 5));
console.log(calculator.div(3, 5));
