const names = ['wes', 'kait', 'lux'];

const fullNames = names.map(function (name){
    return `${name} bos`;
});
console.log(fullNames);


const fullNames2 = names.map((name) =>{
    return `${name} bos`;
});
console.log(fullNames2);


const fullNames3 = names.map(name => `${name} bos`)
console.log(fullNames3);


//Arrow functions are always annonomus functions
// If you use an arrow function - It cannot have a name.

// You can however, put them in a variable:
const sayMyname = (name) => {console.log(`Hello ${name}!`)};

sayMyname("Andrew");
