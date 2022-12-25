  // Set the target date to January 1, 2022
  var targetDate = new Date("December 28, 2022 00:00:00");

  // Update the countdown every 1 second
  var interval = setInterval(function() {
    // Calculate the time left until the target date
    var timeLeft = targetDate - Date.now();

    // If the countdown has reached 0
    if (timeLeft < 0) {
      // Clear the interval and display a message
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "Countdown complete!";
    } else {
      // Calculate the days, hours, minutes, and seconds left
      var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Display the time left in the format "X days X hours X minutes X seconds"
      document.getElementById("countdown").innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }
  }, 1000);