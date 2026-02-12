var noBtn = document.getElementById("noBtn");
var yesBtn = document.getElementById("yesBtn");
var question = document.getElementById("question");
var dodgeCount = 0;
document.addEventListener("mousemove", function (e) {
    var rect = noBtn.getBoundingClientRect();
    var distance = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
    if (distance < 80) {
        moveNoButton();
    }
});
function moveNoButton() {
    dodgeCount++;
    var btnRect = noBtn.getBoundingClientRect();
    var padding = 10;
    var maxX = window.innerWidth - btnRect.width - padding;
    var maxY = window.innerHeight - btnRect.height - padding;
    var minX = padding;
    var minY = padding;
    var x = Math.random() * (maxX - minX) + minX;
    var y = Math.random() * (maxY - minY) + minY;
    noBtn.style.left = "".concat(x, "px");
    noBtn.style.top = "".concat(y, "px");
    if (dodgeCount === 3)
        noBtn.textContent = "What are you doin?";
    if (dodgeCount === 6)
        noBtn.textContent = "Oh so it's like that?";
    if (dodgeCount === 10)
        noBtn.textContent = "You're not tuff";
    if (dodgeCount === 15)
        noBtn.textContent = "Just click yes gng";
    if (dodgeCount >= 20)
        noBtn.textContent = "Keep that ass safe tonight";
}
yesBtn.addEventListener("click", function () {
    document.body.innerHTML = "\n    <div class=\"container\">\n      <h1>Yay!! \uD83D\uDC96\uD83D\uDC96\uD83D\uDC96</h1>\n      <p>You're the best girlfriend in the whole world</p>\n      <button id=\"surpriseBtn\">Surprise \uD83C\uDF81</button>\n    </div>\n  ";
    document
        .getElementById("surpriseBtn")
        .addEventListener("click", function () {
        alert("You're the most beautiful girl in the world ❤️");
    });
});
