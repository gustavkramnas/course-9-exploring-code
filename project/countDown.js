function countdown() {
    var endDate = new Date("2023-06-10T21:00:00"); 
    var now = new Date(); 

    var timeDifference = endDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
      // Countdown has ended
      clearInterval(timer);
      document.getElementById("countdown").textContent = "Countdown Ended!";
      return;
    }

    var seconds = Math.floor(timeDifference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    var countdownElements = document.querySelectorAll(".countdown_value");
    countdownElements[0].textContent = formatTime(days);
    countdownElements[1].textContent = formatTime(hours);
    countdownElements[2].textContent = formatTime(minutes);
    countdownElements[3].textContent = formatTime(seconds);
  }

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  // Start the countdown immediately
  countdown();

  // Update the countdown every second
  var timer = setInterval(countdown, 1000);