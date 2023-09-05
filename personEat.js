function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  let counter = 0;
  Person.prototype.throwUp = function () {
    this.stomach.length = 0;
    counter = 0;
  };
  Person.prototype.eat = function (smt) {
    if (counter > 0) {
      this.throwUp();
      return `Ate too much and throw up`;
    }
    if (this.stomach.length < 5) {
      this.stomach.push(smt);
    } else {
      counter++;
      return `You cant eat that much!`;
    }
    return this;
  };

  Person.prototype.poop = function () {
    this.stomach.length = 0;
  };

  Person.prototype.toString = function () {
    return `${this.name}:${this.age}`;
  };
}

const user1 = new Person("Adam", 22);

user1.eat("apple");
user1.poop();
user1
  .eat("burger")
  .eat("candy")
  .eat("lemon")
  .eat("strawberry")
  .eat("watermelon");

console.log(user1.eat("sushi"));
console.log(user1.eat("sushi"));

console.log(user1.stomach);
// console.log(user1.toString());
