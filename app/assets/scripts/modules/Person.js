/* Standard javascript class es5
function Person(name, favColor) {
    this.name = name,
    this.favoriteColor = favColor,
    this.greet = function() {
      console.log("Hey " + this.name);
    }
}
*/

// es6 javascript using babel
class Person {
  constructor(name, favColor) {
    this.name = name;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log("Hey " + this.name + " get to work!");
  }
}


//module.exports = Person; es5
// es6
export default Person;
