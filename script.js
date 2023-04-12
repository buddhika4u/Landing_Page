const title = document.querySelector('h1');
    let colorIndex = 0;
    const colors = ['#FFA07A', '#FF8C00', '#FF7F50', '#FF6347', '#FF4500', '#FFA500', '#FFD700'];
  
    function changeColor() {
      title.style.color = colors[colorIndex];
      colorIndex++;
      if (colorIndex == colors.length) {
        colorIndex = 0;
      }
    }
  
    setInterval(changeColor, 500);
  
    title.style.opacity = 0;
    let opacity = 0;
  
    function fadeIn() {
      opacity += 0.01;
      title.style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(interval);
      }
    }
  
    const interval = setInterval(fadeIn, 10);