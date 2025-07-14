const button = document.getElementById("bgBtn");

button.onclick = function () {
  document.body.style.backgroundImage = "none"; // remove background image
  document.body.style.backgroundColor = "#dd68aaff"; // then add color
};