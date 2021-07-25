function moveDisco (inicial, final) {
    console.log(`Mover disco da torre ${inicial} para ${final}`)
}

function hanoi (numeroDiscos, inicial, final) {
    if (numeroDiscos > 0) {
        var intermediaria = 6-inicial-final
        hanoi(numeroDiscos-1, inicial, intermediaria)
        moveDisco(inicial, final)
        hanoi(numeroDiscos-1, intermediaria, final)
    }
}

hanoi(4, 1, 3)