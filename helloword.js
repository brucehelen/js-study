/**
 * Created by missionhealth on 15/8/20.
 */


var person = {name: "bruce"};

Object.defineProperty(person, "name", {
    writable: true,
    configurable: false,
    value: "bruce.zhu"
});

console.log(person.name);
person.name = "Helen";
//delete person.name;
console.log(person.name);

var book = {};

Object.defineProperties(book, {
    _year: {
        value: 2004
    },
    edition: {
        writable: true,             // 默认为false
        configurable: true,
        value: 1
    },
    year: {
        get: function() {
            return this._year;
        },
        set: function(newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

book.year = 2005;
console.log(book.year);
console.log(book.edition);

console.log('--------------');

var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log(descriptor.value);
console.log(descriptor);


