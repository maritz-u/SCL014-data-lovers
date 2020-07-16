import data from './data/pokemon/pokemon.js';
import {
  filterByGeneration,
  filterByType,
  orderByName,
  searchByName,
} from './data.js';

// función que simula el cambio de pantalla
const move = (close, open) => {
  document.getElementById(close).style.display = 'none';
  document.getElementById(open).style.display = 'block';
};

// función para botón que lleva a la segunda pantalla y muetra todos los pokemones
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  move('container', 'showResult');
});

// función para botón que cierra la segunda pantalla y vuelve al pantalla de inicio
const btnClose = document.getElementById('btnCerrar');
btnClose.addEventListener('click', () => {
  move('showResult', 'container');
});

// variable que guarda la data pokemon
const pokemonList = data.pokemon;

/* función para mostrar todos los pokemones, se utiliza innerHTML para imprimir en pantalla y
 Html dinamico, para elegir informaciones desde la data. */
const displayPokemon = (pokemonData) => {
  const pokeCard = document.getElementById('pokemones');
  pokemonData.forEach((elem) => {
    pokeCard.innerHTML += `
    <div class="card-container">
  <div id="card" class="card">
    <div id="frente" class="frente">
       <p class="card-title"> ${elem.name.toUpperCase()}</p>
       <p> Numero: ${elem.num}</p>
       <p> <img src=" ${elem.img}"> </p>
    </div>

    <div id="reverso" class=" reverso">
       <p> ${elem.about} </p> 
       <p>${elem.generation.name} </p> 
       <p> Tipo: ${elem.type} </p>
       <p> Fortalezas: ${elem.resistant} </p>
       <p>  Debilidades: ${elem.weaknesses} </p>
    </div>
  </div>
  </div>

`;
  });
};
displayPokemon(pokemonList);

// función para filtrar pokemones por generación
let searchGeneration;
const containerGeneration = document.getElementById('generation');
containerGeneration.addEventListener('change', () => {
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innerHTML = '';
  searchGeneration = containerGeneration.value;

  displayPokemon(filterByGeneration(pokemonList, searchGeneration));
});

let searchType;
const containerType = document.getElementById('tipo');
containerType.addEventListener('change', () => {
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innerHTML = '';
  searchType = containerType.value;

  displayPokemon(filterByType(pokemonList, searchType));
});

let searchOrder;
const containerOrder = document.getElementById('order');
containerOrder.addEventListener('change', () => {
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innerHTML = '';
  searchOrder = containerOrder.value;

  orderByName(pokemonList, searchOrder);
  displayPokemon(pokemonList);
});

let searchPokemon;
const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', () => {
  searchPokemon = document.getElementById('box').value;
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innerHTML = '';

  displayPokemon(searchByName(pokemonList, searchPokemon));
});
