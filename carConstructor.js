function Car(mark, mpg) {
  this.mark = mark;
  this.mpg = mpg;
  this.tank = 0;
  this.odometr = 0;
  Car.prototype.fill = function (gallons) {
    this.tank += gallons;
  };
  Car.prototype.drive = function (distance) {
    if (this.tank === 0) return `Fill the tank`;
    let realDistance = this.tank / this.mpg;

    if (realDistance > distance) {
      this.odometr += distance;
    } else {
      this.odometr += realDistance;
    }
    let realTank = this.tank - distance * this.mpg;
    if (realTank > 0) {
      this.tank = realTank;
    } else {
      this.tank = 0;
      return `I ran out of the fuel at ${this.odometr} miles`;
    }

    return `Drove ${distance} miles!`;
  };
}

const car1 = new Car("Bmw", 2);
car1.fill(100);
// console.log(car1.tank);
console.log(car1.drive(40));
console.log(car1.drive(2));
console.log(car1.drive(10));
car1.fill(30);
console.log(car1.drive(10));

console.log(car1.odometr);

// console.log(car1.odometr);
// console.log(car1.tank);
// console.log(car1.drive(10));
