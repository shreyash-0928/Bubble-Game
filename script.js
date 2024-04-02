var timer = 15;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
    document.querySelector("#scoreVal").classList.add("scoreAnimation");
    setTimeout(function () {
        document.querySelector("#scoreVal").classList.remove("scoreAnimation");
    }, 500);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitrn;
}

function makeBubble() {
    var clutter = " ";

    for (let i = 1; i < 145; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML = `<h1 class="gameOverAnimation">Game Over</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbottom").addEventListener("click", function (dets) {
  var clickedBubble = dets.target;
  if (clickedBubble.classList.contains("bubble")) {
    var clickednum = Number(clickedBubble.textContent);
    if (hitrn !== 0 && clickednum === hitrn) {
      increaseScore();
      makeBubble();
      getNewHit();
    }
  }
});

var restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", function () {
  timer = 15;
  score = 0;
  hitrn = 0;
  document.querySelector("#scoreVal").textContent = score;
  document.querySelector("#timerVal").textContent = timer;
  document.querySelector("#pbottom").innerHTML = "";
  runTimer();
  makeBubble();
  getNewHit();
});


runTimer();
makeBubble();
getNewHit();
