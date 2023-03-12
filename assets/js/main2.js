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




const btn1 = document.getElementById('botao1');
const tipo1 = document.getElementById('tipo1');

const btn2 = document.getElementById('botao2'); 
const tipo2 = document.getElementById('tipo2');

const btn3 = document.getElementById('botao3');
const tipo3 = document.getElementById('tipo3');

const btn4 = document.getElementById('botao4');
const tipo4 = document.getElementById('tipo4');

btn1.addEventListener('click', function () {

    if (tipo1.style.display === 'block') {
        tipo1.style.display = 'block';

    } else {
        tipo1.style.display = 'block';
        tipo2.style.display = 'none';
        tipo3.style.display = 'none';
        tipo4.style.display = 'none';
    }

});

btn2.addEventListener('click', function () {

    if (tipo2.style.display === 'block') {
        tipo2.style.display = 'none';

    } else {
        tipo1.style.display = 'none';
        tipo2.style.display = 'block';
        tipo3.style.display = 'none';
        tipo4.style.display = 'none';
    }

});

btn3.addEventListener('click', function () {

    if (tipo3.style.display === 'block') {
        tipo3.style.display = 'none';

    } else {
        tipo1.style.display = 'none';
        tipo2.style.display = 'none';
        tipo3.style.display = 'block';
        tipo4.style.display = 'none';
    }

});

btn4.addEventListener('click', function () {

    if (tipo4.style.display === 'block') {
        tipo4.style.display = 'none';

    } else {
        tipo1.style.display = 'none';
        tipo2.style.display = 'none';
        tipo3.style.display = 'none';
        tipo4.style.display = 'block';
    }

});
