
// When using var - The variable is not scoped 
// Var is function scoped - Not block scoped
// The for loop is not a function...
// So what is returned from above is the same number after 1000ms  - 3, 3, 3 = BAD

for (var i = 0; i < 3; i++) {
    console.log(i);
    setTimeout(function () {
        console.log('The number is ' + i);
    }, 1000);
}

console.log("***///***///***");

// In this example, the variable is "let" - This is block scoped
// So once we are in the block used for the "for loop" - It kept for that block
// The difference here is the output is - 0, 1, 2 - Even after a sec = GOOD

for (let i = 0; i < 3; i++) {
    console.log(i);
    setTimeout(function () {
        console.log('The number is ' + i);
    }, 1000);
}