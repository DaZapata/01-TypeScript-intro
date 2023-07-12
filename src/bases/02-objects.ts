export const pokemonids = [1,20,30,40,66];

// de esta maneta parseamos un string a un numero
// pokemonids.push(+'5');

// creamos una interface para decir que el objeto se debe crear tal cual como lo declaramos en la interface
// la interface no es instanciable
interface Pokemon {
    id: number,
    name: string,
    age?: number // con el ? le decimos puede llevar o no el age
}

// aqui el objeto implementa esa interface
export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 2
}

export const charmandeer:Pokemon = {
    id: 4,
    name: 'Charmander',
    age: 1
}

export const pokemons: Pokemon[] = [];
pokemons.push(bulbasaur, charmandeer);