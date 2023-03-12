var btn1 = document.getElementById('botao1');
var tipo1 = document.getElementById('tipo1');

var btn2 = document.getElementById('botao2');
var tipo2 = document.getElementById('tipo2');

var btn3 = document.getElementById('botao3');
var tipo3 = document.getElementById('tipo3');

var btn4 = document.getElementById('botao4');
var tipo4 = document.getElementById('tipo4');

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