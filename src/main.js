/* eslint-disable no-use-before-define */

import {
  filterByGeneration,
  filterByType,
  orderByName,
  searchByName,
} from './data.js';

let pokemonList = [];
fetch('https://run.mocky.io/v3/72076f16-7d5e-4daa-a080-d86b30ecf72c') // promesa, hace una petición
  // retorna una respuesta(response), transforma el 'response' en formato json
  .then(response => response.json())
  .then((data) => { //  'response.json' = data
    pokemonList = data.pokemon;
    displayPokemon(pokemonList);
  })
  .catch(error => error);


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


const getType = (typeList) => {
  let pokeType = '';
  typeList.forEach((type) => {
    pokeType += `<span class="badge ${type}"> ${type} </span>`;
  });

  return pokeType;
};
/* función para mostrar todos los pokemones, se utiliza innerHTML para imprimir en pantalla y
 Html dinamico, para elegir informaciones desde la data. */
const displayPokemon = (pokemonData) => {
  const pokeCard = document.getElementById('pokemones');
  pokemonData.forEach((elem) => {
    pokeCard.innerHTML += `
  <div class="card-container">
    <div id="card" class="card" style= "padding: 10px !important">
      <div id="front" class="front">
         <p class="card-title"> ${elem.name.toUpperCase()}</p>
         <p class= "headband"> # ${elem.num}</p>
         <p> <img  class="picture" src=" ${elem.img}"> </p>
        
      </div>

      <div id="back" class="back">
         <p> <strong class= strong>${elem.about}</strong>  </p> 
         <p>Generación</p> 
         <p>${elem.generation.name}</p>
         <p>Elemento</p>
         <p>${getType(elem.type)} </p>
         <p>Fortalezas</p>
         <p>${getType(elem.resistant)}</p>
         <p>Debilidades</p>
         <p>${getType(elem.weaknesses)} </p>
      </div>
    </div>
  </div>
`;
  });
};


// captura el valor de elección del usuario, e imprime en pantalla
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
const btnBuscar = document.getElementById('box');
btnBuscar.addEventListener('keyup', () => {
  searchPokemon = btnBuscar.value.toLowerCase();
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innerHTML = '';
  displayPokemon(searchByName(pokemonList, searchPokemon));
});
