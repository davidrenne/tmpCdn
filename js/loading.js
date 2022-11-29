    var dots = ["."];
    var totalSeconds = 0;
    var dotInterval = 0;
    setTimeout(function() {
      clearInterval(dotInterval)
    }, 60 * 1000);
    setTimeout(function() {
      if (document.getElementById("loadingText")) {
        console.error(document.getElementById("loadingText"))
        document.getElementById("loadingText").innerHTML = "Loading ";
        dotInterval = setInterval(function() {
          if (document.getElementById("dotdotdot")) {
            if (totalSeconds < 10) {
              document.getElementById("dotdotdot").innerHTML = dots.join(" ");
              dots.push(".");
              if (dots.length === 4) {
                dots = ["."];
              }
              totalSeconds++;
            } else {
              document.getElementById("loadingText").innerHTML = "";
              document.getElementById("dotdotdot").innerHTML = "Slow client connection, please wait...";
            }
          }
        }, 1000);
      }
    }, 3000);