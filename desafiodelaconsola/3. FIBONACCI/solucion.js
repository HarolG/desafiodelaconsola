let numAnterior = 0, numActual; numSiguiente = 0;


for(let i = 0; i < 49; i++) {
    if(i < 1) {
        console.log(0)
        numActual = 0;
    }

    if(numActual == 0) {
        numActual++;
        numAnterior = 0;
        console.log(numActual);
    }

    numSiguiente = numAnterior + numActual;
    numAnterior = numActual;
    numActual = numSiguiente;

    console.log(numActual)
}