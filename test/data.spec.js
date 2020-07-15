import {
  filterByGeneration, filterByType, orderByName,
} from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

describe('filterByGeneration', () => {
  it('entrega la cantidad de pokemones en Johto', () => {
    expect(filterByGeneration(data.pokemon, 'johto')).toHaveLength(100);
  });
});


describe('filterByType', () => {
  it('Entrega el número de pokemones de cada tipo en especifico', () => {
    expect(filterByType(data.pokemon, 'grass')).toHaveLength(24);
  });
});

describe('orderByName', () => {
  it('Ordena los pokemones de acuerdo a su nombre de la A-Z', () => {
    orderByName(data.pokemon, 'A-Z');
    expect(data.pokemon[0].name).toBe('abra');
  });
});
