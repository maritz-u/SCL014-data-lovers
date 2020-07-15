import {
  filterByGeneration, filterByType, orderByName, searchByName,
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

  it('Ordena los pokemones de acuerdo a su nombre de la Z-A', () => {
    orderByName(data.pokemon, 'Z-A');
    expect(data.pokemon[0].name).toBe('zubat');
  });
});

describe('searchByName', () => {
  it('is a function', () => {
    expect(typeof searchByName).toBe('function');
  });

  test('Debería retornar pokemon por nombre', () => {
    expect(searchByName(data.pokemon, 'bulbasaur')).toHaveLength(1);
  });
});
