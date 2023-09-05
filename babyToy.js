function Person(name, age) {
  this.name = name;
  this.age = age;

  Person.prototype.compareAge = function (person2) {
    if (this.age > person2.age) {
      return `${person2.name} is younger than me`;
    } else if (this.age === person2.age) {
      return `${person2.name} is the same age as me`;
    }
    return `${person2.name} is older than me`;
  };
}

function Baby(name, age, favToy) {
  Person.call(this, name, age);

  this.favToy = favToy;

  Baby.prototype.play = function () {
    return `${this.name} is playing with ${this.favToy}`;
  };
}

let firstBaby = new Baby("Eric", 3, "ball");
let secondBaby = new Baby("Monica", 4, "doll");
console.log(firstBaby);
console.log(firstBaby.play());
console.log(secondBaby.play());
