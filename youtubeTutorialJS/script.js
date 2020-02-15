// Get elements
var backgroundEl = document.getElementById("background");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var totalNumber = 0;

var changeBackground = function() {
  backgroundEl.style.width = totalNumber + "%";
};
// declare a what happens when a button is clicked
var clickedButton = function(name) {
  if (name == "plus") {
    if (totalNumber <= 90) {
      totalNumber += 10;
      changeBackground();
      console.log(totalNumber);
    } else {
      alert("Sorry can't go higher");
    }
  }
  if (name == "minus") {
    console.log("minus");
    if (totalNumber >= 10) {
      totalNumber -= 10;
      console.log(totalNumber);
      changeBackground();
    } else {
      alert("Sorry can't go lower");
    }
  }
};

//
plus.addEventListener("click", clickedButton.bind(null, "plus"));
minus.addEventListener("click", clickedButton.bind(null, "minus"));