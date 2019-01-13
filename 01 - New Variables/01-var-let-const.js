// var is function scoped:
function setWidth(params) {
    var width = 100;
    console.log(width);

}
//Works
setWidth();

//Error!
//console.log(width);

//Interesting side-effect of var...
var age = 100;
if (age > 12) {
    var dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old`);
}

//Because the "var" keyword is function scoped - Not block scoped - This is global and works :\
console.log(dogYears);


//Whereas let and cost are "block scoped"
var age2 = 15;
if (age2 > 12) {
    let dogYears2 = age2 * 7;
    console.log(`You are ${dogYears2} dog years old`);
}
//Error!
//console.log(dogYears2);


/*
Key lesson take-away:

Scoping - Function scoped vs block scoping
*/