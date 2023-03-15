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
                        <a type="button" onclick="clicou1()">About</a>
                        <a type="button" onclick="clicou2()">Base Stats</a>
                    </div>
                    <div id="tipo1" class="tipo">
                        <div>
                            <span>Species</span><span class="span-black" >${pokemon.species}</span>
                            <span>Height</span><span class="span-black" >${pokemon.height}</span>
                            <span>Weight</span><span class="span-black" >${pokemon.weight}</span>
                            <span>Abilities</span>${pokemon.abilities.map((ability) => `<span class="span-black">${ability}</span>`).join('')}
                        </div>

                        <h3>Breeding</h3>
            
                        <div><span>base_experience</span> <span class="span-black">${pokemon.base_experience}</span></div>
                    </div>
            
                    <div id="tipo2" class="tipo">
                        <div>
                            <div>
                                ${pokemon.stats.map((stats) => `<span class="span-black" >${stats}</span>`).join('')}
                            </div>  
                            <div>
                                ${pokemon.base_stat.map((base_stat) => `<span class="span-black" >${base_stat}</span>`).join('')}
                            </div>

                            <div class="cores">
                            ${pokemon.base_stat.map((base_stat) => `<meter value="50" min="0" max="100"  optimum="100" low="20" high="80"></meter>`).join('')}
                            </div>
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


function clicou1(btn1, tipo1) {

    var tipo1 = document.getElementById('tipo1');
    var tipo2 = document.getElementById('tipo2');

    if (tipo1.style.display === 'none') {
        tipo1.style.display = 'block'
        tipo2.style.display = 'none'

    } else {
        tipo2.style.display = 'none';
        tipo1.style.display = 'block';
    }

}
function clicou2(btn2, tipo2) {

    var tipo1 = document.getElementById('tipo1');
    var tipo2 = document.getElementById('tipo2');

    if (tipo2.style.display === 'none') {
        tipo2.style.display = 'block';
        tipo1.style.display = 'none'

    } else {
        tipo1.style.display = 'none';
        tipo2.style.display = 'block';
    }

}
