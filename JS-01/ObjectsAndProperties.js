//Array
var people = {
    name: 'Phuc',
    lastName: 'Van',
    age: 18,
    job: 'developer',
    address: '23 Wall Street'
};
console.log(people);
console.log(people.name);
console.log(people.lastName);

console.log(people['age']);

var xyz = 'job';
console.log(people[xyz]);
//change properties in array

people.age = 23;
console.log(people.age);

// create a object
var Phu = new Object();
Phu.name = 'Phu';
Phu.lastName = 'Thien';
Phu.age = 25;
Phu.job = 'sale';

console.log(Phu);