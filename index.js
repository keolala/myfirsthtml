window.addEventListener("DOMContentLoaded", function () {
  alert("Welcome to my first web page!");

  document.getElementById("surprise").addEventListener("click", function () {
    this.textContent = "Tell Tom Holland";
  });
});
