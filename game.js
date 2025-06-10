const showlump = document.getElementById("lump");
let timeoutId = null;
let startTime = null;
let endTime = null;
let score = document.querySelector(".score");
score.textContent = null;

document.getElementById("start").addEventListener("click", function () {
  const delay = Math.random() * 8000 + 3000; //3s～10s秒

  if (timeoutId !== null) {
    clearTimeout(timeoutId);
  }
  console.log(Math.floor(delay / 1000) + "秒後に表示");
  timeoutId = setTimeout(() => {
    showlump.classList.remove("hidden");
    startTime = Date.now();
  }, delay);
});

document.getElementById("reset").addEventListener("click", function () {
  console.log("ゲームがリセットされました");
  showlump.classList.add("hidden");
  clearTimeout(timeoutId);
  timeoutId = null;
  score.textContent = null;
});

document.getElementById("judg").addEventListener("click", function () {
  endTime = Date.now();
  score.textContent =
    "ランプが点灯してから" +
    (endTime - startTime).toString().substring(0, 4) / 1000 +
    "秒かかりました。";
});
