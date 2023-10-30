let contador = setTimeout(start, 1000);

function start() {
    document.getElementById("hora").innerHTML = contador;
}

function stop() {
    clearTimeout(contador);
}

function reset() {
    setTimeout(start, 0);
}