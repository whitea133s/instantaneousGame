const showlump = document.getElementById("lump");
let timeoutId = null;

document.getElementById("start").addEventListener("click", function () {
  const delay = Math.random() * 8000 + 3000; //3s～10s秒
  if (timeoutId !== null) {
    clearTimeout(timeoutId);
  }
  console.log(Math.floor(delay / 1000) + "秒後に表示");
  timeoutId = setTimeout(() => {
    showlump.classList.remove("hidden");
  }, delay);
});

document.getElementById("reset").addEventListener("click", function () {
  console.log("ゲームが中断されました");
  showlump.classList.add("hidden");
  clearTimeout(timeoutId);
  timeoutId = null;
});
