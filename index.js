// Display an alert when the page loads
window.addEventListener("DOMContentLoaded", function () {
  alert("Welcome to my first web page!");
});

// Change button text on click
document.getElementById("surprise").addEventListener("click", function () {
  this.textContent = "Tell Tom Holland";
});
