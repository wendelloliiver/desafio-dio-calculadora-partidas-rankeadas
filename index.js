function saldo(vitoria, derrota) {
    let nivel
    let rank = (vitoria - derrota)
    
    if (rank <= 10) {
        nivel = "Ferro"
    } else if (rank > 10 && rank <= 20) {
        nivel = "Bronze"
    } else if (rank > 20 && rank <= 50) {
        nivel = "Prata"
    } else if (rank > 50 && rank <= 80) {
        nivel = "Ouro"
    } else if (rank > 80 && rank <= 90) {
        nivel = "Diamante"
    } else if (rank > 90 && rank <= 100) {
        nivel = "Lendário"
    } else if (rank >= 101) {
        nivel = "Imortal"
    }

    console.log("O Herói tem de saldo de " + rank + " está no nível de " + nivel)
}

saldo(92, 10)