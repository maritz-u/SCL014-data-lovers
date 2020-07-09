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

// función para botón que cierra la segunda pantalla y vuelve al pantalla de inicio
const btnClose = document.getElementById("btnCerrar");
btnClose.addEventListener("click", () => {
  move("showResult", "container");
});

// variable que guarda la data pokemon
const pokemonList = data.pokemon;

// console.log(pokemonList[3].name);

/* Captura del div vacio 'pokemones', donde se utiliza innerHTML para imprimir las informaciones  que fueron iteradas por el
   metodo forEach, donde tenemos acceso al array de la propiedad pokemon, que por su vez, es compuesto por varios objetos.
  Html dinamico, donde las comillas invertidas  delimitan las cadenas y con el ${} obtenemos el valor de la propiedad solicitada. */

  //Se agrega clase 'card' para estilo con flexbox.
  //Se agrega clase 'desaparece' para dejar oculta algunas informaciones de los pokemones 

const displayPokemon = pokemonData => {
  const pokeCard = document.getElementById("pokemones");
  pokemonData.forEach(elem => {
    pokeCard.innerHTML += `
  <div id="card" class=" card">
    <div id="frente" class="frente">
       <p> ${elem.name.toUpperCase()}</p>
       <p> Numero: ${elem.num}</p>
       <p> <img src=" ${elem.img}"> </p>
    </div>

    <div id = "reverso" class=" reverso">
       <p> ${elem.about} </p> 
       <p>${elem.generation.name} </p> 
       <p> Tipo: ${elem.type} </p>
       <p> Fortalezas: ${elem.resistant} </p>
       <p>  Debilidades: ${elem.weaknesses} </p>
    </div>
  </div>

`;
  });
};
displayPokemon(pokemonList);

// función para filtrar pokemones por generación
let searchGeneration;
const containerGeneration = document.getElementById("generation");
containerGeneration.addEventListener("change", () => {
  let closePokemones = document.getElementById("pokemones");
  closePokemones.innerHTML = "";
  searchGeneration = containerGeneration.value;

  console.log(containerGeneration, searchGeneration);

  displayPokemon(filterByGeneration(pokemonList, searchGeneration));
});

const filterByGeneration = (data, valor) => {
  console.log(data, valor);
  let filterPokemonByGeneration = pokemonList.filter(
    generacion => generacion.generation.name === valor
  );
  console.log(filterPokemonByGeneration);

  return filterPokemonByGeneration;
  // console.log(pokeCard)
};

let searchType;
const containerType = document.getElementById("tipo");
console.log(containerType);
containerType.addEventListener("change", () => {
  pokeCard.innerHTML = "";

  searchType = containerType.value;
  console.log(searchType);
});

let orderPokemon;
const containerOrder = document.getElementById("order");
containerOrder.addEventListener("change", () => {
  pokeCard.innerHTML = "";
  orderPokemon = containerOrder.value;
  console.log(containerOrder, orderPokemon);
});

const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", () => {
  const searchPokemon = document.getElementById("box").value;
  console.log(searchPokemon);
});
