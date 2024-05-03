function saldoVitorias(qtdVitoria, qtdDerrota) {
    return qtdVitoria - qtdDerrota
}

let jogo = saldoVitorias(110, 0);

function nivelJogador(jogo) {
    let nivel;
    if (jogo <= 10) nivel = "Ferro"
    else if (jogo <= 20) nivel = "Bronze"
    else if (jogo <= 50) nivel = "Prata"
    else if (jogo <= 80) nivel = "Ouro"
    else if (jogo <= 90) nivel = "Diamante"
    else if (jogo <= 100) nivel = "Lendário"
    else nivel = "Imortal"
    return nivel
        
}

function imprimirResultado(){
    console.log("O Herói tem de saldo de **" + jogo + "** está no nível de **" + nivelJogador(jogo) + "**")
}

imprimirResultado();
