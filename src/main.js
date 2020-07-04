import data from "./data/pokemon/pokemon.js";

console.log(data);

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
  move("container", "foro");
});

const btnVolver = document.getElementById("btnCerrar");
btnVolver.addEventListener("click", () => {
  move("showResult", "container");
});

let pokemonList = data.pokemon;
// console.log(pokemonList[3].name);

let poket = document.getElementById("pokemones");

pokemonList.forEach(elem => {
  // pokemom.innerHTML += 'Nombre: '+ elem.name;
  poket.innerHTML += `
<br>
<h2> ${elem.name.toUpperCase()}</h2>
<h2> <img src=" ${elem.img}"> </h2>
<p>${elem.about} </p> 
<p> Numero: ${elem.num}</p>
<p> Tipo: ${elem.type} </p>
<p> Fortalezas: ${elem.resistant} </p>
<p> Debilidades: ${elem.weaknesses} </p>
<br>
`;
});
