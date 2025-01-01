const turnon = document.getElementById ('turnon');
const turnof = document.getElementById ('turnoff');
const lamp = document.getElementById ('lamp');

function lampon () {
    lamp.src = './img/ligada.jpg';
}


function lampoff () {
    lamp.src = './img/desligada.jpg';
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}




turnon.addEventListener ('click', lampon);
turnof.addEventListener ('click' , lampoff);
lamp.addEventListener ('dblclick', lampBroken);
