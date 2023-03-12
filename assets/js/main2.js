const pokemonListDetails = document.getElementById('pokemonListDetails')
const loadMoreD = document.getElementById('loadMoreD')

const limit = 10;
let offset = 0;

function loadPokemonD(offset, limit) {
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


                <div class="imagem"><img src="${pokemon.photo}"></div>
            
                <div class="classes">
            
                    <div class="botoes">
                        <button id="botao1">About</button>
                        <button id="botao2">Base Stats</button>
                        <button id="botao3">Evolution</button>
                        <button id="botao4">Moves</button>
                    </div>
            
            
                    <div class="tipo" id="tipo1">
            
                        <div><span>Species1</span> <span>Seed</span></div>
            
                        <h3>Breeding</h3>
            
                        <div><span>Gender</span> <span>Seed</span></div>
            
                    </div>
            
                    <div class="tipo" id="tipo2">

                        <div><span>Species2</span> <span>Seed</span></div></div>
                     
                    <div class="tipo" id="tipo3">
                        <div><span>Species3</span> <span>Seed</span></div>
                    </div>
            
            
                    <div class="tipo" id="tipo4">
                        <div>
                            <span>Species4</span> <span>Seed</span>
                        </div>
                    </div>

                </div>
            </div>
            </li>
                `).join('')
        pokemonListDetails.innerHTML += newHtml
    })
}
loadPokemonD(offset, limit)

loadMoreD.addEventListener('click', () => {
    offset += limit
    loadPokemonD(offset, limit)
})
