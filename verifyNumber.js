
function verify(numberJogador, numberRandom) {
    if (numberJogador > numberRandom) {
        return "maior";
    } else if (numberJogador < numberRandom) {
        return "menor";
    } else {
        return "igual";
    }
}

export default verify;
