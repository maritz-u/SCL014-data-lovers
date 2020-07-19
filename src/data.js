// función para filtar pokemon por generación
const filterByGeneration = (data, valor) => {
  const filterPokemonByGeneration = data.filter(
    pokemon => pokemon.generation.name === valor,
  );
  return filterPokemonByGeneration;
};

// función para filtrar pokemon por tipo
const filterByType = (data, valor) => {
  const filterPokemonByType = data.filter(
    pokemon => pokemon.type.indexOf(valor.toLowerCase()) > -1,
  );
  return filterPokemonByType;
};

// función para ordenar pokemon de A-Z y Z-A
const orderByName = (data, valor) => {
  if (valor === 'A-Z') {
    data.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    data.sort((a, b) => b.name.localeCompare(a.name));
  }
};

// función para búsqueda por nombre o numero de pokemon
const searchByName = (data, valor) => {
  const filterPokemonByName = data.filter(
    pokemon => pokemon.name === valor.toLowerCase() || pokemon.num === valor,
  );
  return filterPokemonByName;
};

export {
  filterByGeneration, filterByType, orderByName, searchByName,
};
