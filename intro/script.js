// Arrays

var names = ['Hibran', 'Emmanuel', 'Juan Pablo', 'Bertin Alejo'];
var years = new Array(1986, 1988, 1990, 1997);

console.log(names[1]);
names[2] = 'Mora';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

var whereIs = john.indexOf(1990);
console.log(whereIs);

if(john.indexOf('teacher') === -1){
    console.log('John is not a teacher');
} else {
    console.log('John is a teacher');
}