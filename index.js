// Display an alert when the page loads
window.addEventListener("DOMContentLoaded", function () {
  alert("Welcome to my first web page!");
});

// Add a click interaction to the button
document.getElementById("surprise").addEventListener("click", function () {
  this.textContent = "tell tom holland";
});
// When the button clicked appears alert
window.addEventListener("DOMContentLoaded", function () {
  alert("tell tom holland");
});


