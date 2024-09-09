
function random(inicio, fim) {
    return Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
}

export default random;
