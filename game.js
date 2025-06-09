const delay = Math.random() * 8000 + 3000;

function switchLump() {
  const showlump = document.getElementById("lump");
  showlump.classList.remove("hidden");
}
console.log(Math.floor(delay / 1000));
setTimeout(() => {
  switchLump();
}, delay);
