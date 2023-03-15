function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  var colorChangeInterval;
  var startButton = document.querySelector("[data-start]");
  var stopButton = document.querySelector("[data-stop]");
  
  function startColorChange() {
    startButton.disabled = true;
    colorChangeInterval = setInterval(function() {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
  
  function stopColorChange() {
    startButton.disabled = false;
    clearInterval(colorChangeInterval);
  }
  
  startButton.addEventListener("click", startColorChange);
  stopButton.addEventListener("click", stopColorChange);
