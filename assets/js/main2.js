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
                        <a id="botao1" onclick="clicou1()">About</a>
                        <a id="botao2" onclick="clicou2()">Base Stats</a>
                        <a id="botao3" onclick="clicou3()">Evolution</a>
                        <a id="botao4" onclick="clicou4()">Moves</a>
                    </div>
            
            
                    <div id="tipo1" class="tipo" >
            
                        <div>
                            <span>Species</span><span class="span-black" >${pokemon.species}</span>
                            <span>Height</span><span class="span-black" >${pokemon.height}</span>
                            <span>Weight</span><span class="span-black" >${pokemon.weight}</span>
                            <span>Abilities</span>${pokemon.abilities.map((ability) => `<span>${ability}</span>`).join('')}
                        </div>
            
                        <h3>Breeding</h3>
            
                        <div><span>Gender</span> <span>Seed</span></div>
            
                    </div>
            
                    <div class="tipo" id="tipo2">
                        <div>
                            <div>${pokemon.stats.map((stats) => `<span class="span-black" >${stats}</span>`).join('')}</div>  
                            <div>${pokemon.base_stat.map((base_stat) => `<span class="span-black" >${base_stat}</span>`).join('')}</div>
                        </div>
                    </div>
                     
                    <div class="tipo" id="tipo3">
                        <div>
                            <span>HP</span> <span>.....</span>
                            <span>Attack</span> <span>....</span>
                        </div>
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
const btn2 = document.getElementById('botao2');
const btn3 = document.getElementById('botao3');
const btn4 = document.getElementById('botao4');


function clicou1(btn1, tipo1) {
    var tipo1 = document.getElementById('tipo1');
    const tipo2 = document.getElementById('tipo2');
    const tipo3 = document.getElementById('tipo3');
    const tipo4 = document.getElementById('tipo4');

    if (tipo1.style.display === 'block') {
        tipo1.style.display = 'block';

    } else {
        tipo1.style.display = 'block';
        tipo2.style.display = 'none';
        tipo3.style.display = 'none';
        tipo4.style.display = 'none';
    }

}

function clicou2(btn2, tipo2) {
    var tipo1 = document.getElementById('tipo1');
    var tipo2 = document.getElementById('tipo2');
    var tipo3 = document.getElementById('tipo3');
    var tipo4 = document.getElementById('tipo4');

    if (tipo2.style.display === 'block') {
        tipo2.style.display = 'none';

    } else {
        tipo1.style.display = 'none';
        tipo2.style.display = 'block';
        tipo3.style.display = 'none';
        tipo4.style.display = 'none';
    }

}


function clicou3(tipo3) {
    var tipo1 = document.getElementById('tipo1');
    var tipo2 = document.getElementById('tipo2');
    var tipo3 = document.getElementById('tipo3');
    var tipo4 = document.getElementById('tipo4');

    if (tipo3.style.display === 'block') {
        tipo3.style.display = 'none';

    } else {
        tipo1.style.display = 'none';
        tipo2.style.display = 'none';
        tipo3.style.display = 'block';
        tipo4.style.display = 'none';
    }

}

function clicou4(tipo4) {
    var tipo1 = document.getElementById('tipo1');
    var tipo2 = document.getElementById('tipo2');
    var tipo3 = document.getElementById('tipo3');
    var tipo4 = document.getElementById('tipo4');

    if (tipo4.style.display === 'block') {
        tipo4.style.display = 'none';

    } else {
        tipo1.style.display = 'none';
        tipo2.style.display = 'none';
        tipo3.style.display = 'none';
        tipo4.style.display = 'block';
    }

}

/*
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
*/
