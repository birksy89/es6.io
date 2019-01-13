// You can re-instanciate a var = BAD
var points = 50;
var points = 60;
console.log(points);

// Cant do that with a let
let pointsLet = 50;
//let pointsLet = 60; //SyntaxError: Identifier 'pointsLet' has already been declared
console.log(pointsLet);

// Cant do that with a const
const pointsconst = 50;
//const pointsconst = 60; //SyntaxError: Identifier 'pointsConst' has already been declared
console.log(pointsconst);

//can't even re-assign a const at all - It's constant 
const pointsconst2 = 50;
//pointsconst2 = 60; //TypeError: ​​Assignment to constant variable.​​
console.log(pointsconst2);



const key = 'abc123';
var points = 50;
let winner = false;

if(points >40){
    let winner = true;
}

const person = {
    name: 'Wes',
    age: 28
}


const wes = Object.freeze(person);