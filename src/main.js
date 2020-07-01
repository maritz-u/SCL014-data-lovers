import data from "./data/pokemon/pokemon.js";

// console.log(data);

const move = (close, open) => {
  document.getElementById(close).style.display = "none";
  document.getElementById(open).style.display = "block";
};

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  move("container", "showResult");
});

const btnForo = document.getElementById("btnForo");
btnForo.addEventListener("click", () => {
  move("container", "showResult");
});
