//TIMER (simple seconds)
let counter = 25;
setInterval(function () {
  counter--;
  if (counter >= 0) {
    document.getElementById("count").innerHTML = counter;
  }
  if (counter == 0) {
    alert("SALE STARTED");
    document.getElementById("count").innerHTML = "Till 5th JULY ' 2021";
    document.getElementById("hea").innerHTML = "OFFER: ";
  }
}, 1000);