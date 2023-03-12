
const pokeapi = {}

function convertPokeApiDetailsToPokemon(pokeDetails) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetails.id
    pokemon.name = pokeDetails.name

    const types = pokeDetails.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetails.sprites.other.dream_world.front_default

    return pokemon
}

pokeapi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((reaponse) => reaponse.json())
        .then(convertPokeApiDetailsToPokemon)
}

pokeapi.getPokemons = (offset = 0, limit = 1000) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map((pokeapi.getPokemonsDetails)))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonsDetails) => pokemonsDetails)
}