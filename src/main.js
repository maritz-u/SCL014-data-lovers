import data from "./data/pokemon/pokemon.js";

console.log(data);

// función que simula el cambio de pantalla
const move = (close, open) => {
  document.getElementById(close).style.display = "none";
  document.getElementById(open).style.display = "block";
};

// función para botón que lleva a la segunda pantalla y muetra todos los pokemones
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  move("container", "showResult");
});

// función para botón que lleva a la un link externo para Foros
const btnForo = document.getElementById("btnForo");
btnForo.addEventListener("click", () => {
  move("container", "foro");
});

// función para botón que cierra la segunda pantalla y vuelve al pantalla de inicio
const btnClose = document.getElementById("btnCerrar");
btnClose.addEventListener("click", () => {
  move("showResult", "container");
});

const btnCloseForo = document.getElementById("btnCerrarForo");
btnCloseForo.addEventListener("click", () => {
  move("foro", "container");
});

// variable que guarda la data pokemon
let pokemonList = data.pokemon;
// console.log(pokemonList[3].name);

/* Captura del div vacio 'pokemones', donde se utiliza innerHTML para imprimir las informaciones  que fueron iteradas por el 
   metodo forEach, donde tenemos acceso al array de la propiedad pokemon, que por su vez, es compuesto por varios objetos.
  Html dinamico, donde las comillas invertidas  delimitan las cadenas y con el ${} obtenemos el valor de la propiedad solicitada.
  Se agrega clase 'card' para estilo con flexbox.
  Se agrega clase 'desaparece' para dejar oculta algunas informaciones de los pokemones*/

let pokeCard = document.getElementById("pokemones");
pokemonList.forEach(elem => {
  // pokemom.innerHTML += 'Nombre: '+ elem.name;
  pokeCard.innerHTML += `
  <div id="card" class=" card">
  <div id="uno">
<p class="uno"> ${elem.name.toUpperCase()}</p>
<p class="uno"> <img src=" ${elem.img}"> </p>
</div>
<p id="a" class="desaparece">${elem.about} </p> 
<p id="b" class="desaparece"> Numero: ${elem.num}</p>
<p id="c" class="desaparece"> Tipo: ${elem.type} </p>
<p id="d" class="desaparece"> Fortalezas: ${elem.resistant} </p>
<p id="e" class="desaparece"> Debilidades: ${elem.weaknesses} </p>
</div>

`;
});

/* función que captura el id'card', y cuan do se haceclick en la carta pokemon, nos muestra las informaciones ocultas*/
let btnChange = document.getElementById("card");
btnChange.addEventListener("click", () => {
  // pokemonList.forEach(elem => {
  // if (elem){

  move("uno", "a");
  move("uno", "b");
  move("uno", "c");
  move("uno", "d");
  move("uno", "e");

  // }
  // }
});
