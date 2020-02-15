// when were you born?
var birthYear = prompt("What human year were you born on?");

// what is todays date?
var prsntYear = prompt("Whats todays human year?");

//age
var age = prsntYear - birthYear

//days alive
var daysOld = age * 365

//output
alert("Your human age is, " + age + " years old, and have lived for " + daysOld + " days in this planet.");
console.log("The humans age is " + age + " years old, and have lived for " + daysOld + " days in this planet.");