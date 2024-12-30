// Countdown Timer Script
// Set the date we're counting down to
var countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get current date and time
  var now = new Date().getTime();

  // Find the time remaining
  var distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)); // milliseconds * seconds * minutes * hours
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // milliseconds * seconds * minutes
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the respective elements
  document.getElementById("days").innerHTML = days + " <br>Days";
  document.getElementById("hours").innerHTML = hours + " <br>Hours";
  document.getElementById("minutes").innerHTML = minutes + " <br>Mins";
  document.getElementById("seconds").innerHTML = seconds + " <br>Sec";

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
  }
}, 1000);
