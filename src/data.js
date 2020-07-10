const filterByGeneration = (data, valor) => {
  console.log(data, valor);
  const filterPokemonByGeneration = data.filter(
    pokemon => pokemon.generation.name === valor
  );
  console.log(filterPokemonByGeneration);

  return filterPokemonByGeneration;
};

const filterByType = (data, valor) => {
  console.log(data, valor);
  const filterPokemonByType = data.filter(
    pokemon => pokemon.type.indexOf(valor.toLowerCase()) > -1
  );
  console.log(filterPokemonByType);

  return filterPokemonByType;
};

const orderByName = (data, valor) => {
  console.log(data, valor);

  if (valor === "A-Z") {
    data.sort(
      (a, b) => a.name.localeCompare(b.name)
    );
  } else {
    data.sort(
      (a, b) => b.name.localeCompare(a.name)
    );
  }
};

export { filterByGeneration, filterByType, orderByName };
