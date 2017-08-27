// Objects and methods

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'Teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        return 2017 - this.yearOfBirth;
    }
}

john.age = john.calculateAge();
console.log(john.age);

