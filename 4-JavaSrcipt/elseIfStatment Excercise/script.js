// ask for age
var age = Number(prompt("What is your age?"));

// if age is negative. print an error message 
if(age < 0) {
  console.log("Invalid entry! Please enter again");
}

// if age is 21. print "happy 21st birthday!!"
if(age === 21) {
  console.log("Happy 21st Birthday!!!");
}

// if age is odd. print "your age is odd!"
if(age % 2 !== 0) {
  console.log("Your age is odd!");
}

// if age is a perfect square. print "perfect square!"
if (age % Math.sqrt(age) === 0) {
  console.log("Perfect square!!");
}

// output
else {
  console.log("Wow you are " + age + " years old!");
}