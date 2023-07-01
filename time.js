setInterval(() => {
    const text = document.getElementById("num");
    text.innerHTML = "SIGNAL: " + (Math.random() * 10 + 70).toFixed(4);
  }, 100)