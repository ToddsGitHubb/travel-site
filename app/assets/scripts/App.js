/*
var $ = require('jquery');
//var Person = require('./modules/Person');
// es6 import
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " you owe uncle Sam - $.01");
  }
}

var dude = new Person("Dumble Head", "brown");
dude.greet();

var jane = new Adult("Bubble Head", "yellow");
jane.greet();
jane.payTaxes();

new Person("Hubble Head", "Blue").greet();
*/

import MobileMenu from './modules/MobileMenu';

var mobileMenu = new MobileMenu();
