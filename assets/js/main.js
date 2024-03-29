const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')
const limit = 10;
let offset = 0;

function loadPokemon(offset, limit) {
    pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
    
                    <div class="details">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        
                        <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                    </div>
                <button type="button" class="${pokemon.type}" id="botdetails" onclick="loadpokemon()">Details</button>
                </li>
                `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemon(offset, limit)

loadMore.addEventListener('click', () => {
    offset += limit
    loadPokemon(offset, limit)
})