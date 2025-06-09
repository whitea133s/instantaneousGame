const delay = Math.random() * 8000 + 3000; //３s～10s秒

function switchLump() {
  const showlump = document.getElementById("lump");
  showlump.classList.remove("hidden");
}
console.log(Math.floor(delay / 1000) + "秒後に表示");
setTimeout(() => {
  switchLump();
}, delay);
