const CALCULAR = document.getElementById('calcular');       //constante direccion del boton calcular
const ERROR = document.getElementById('error');             //Constante direccion del texto de error
const FLU = document.getElementById('flu');                 //Constante direccion del texto del flujo
const MAN = document.getElementById('man');                 //Constane direccion del texto de mantenimiento

/*El listener reacciona ante el boton, al ser presionado
El evento se encarga de calcular un flujo y mantenimiento según
el peso ingresado en la caja input*/
CALCULAR.addEventListener('click', () => {
    const PESO = document.getElementById('peso').value
    if (PESO > 0){
        ERROR.style.display = 'none'
        let flujo = calcularFlujo(PESO);
        let mantenimiento = calcularMantenimientoSuperior(calcularMantenimiento(flujo));
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
    else{
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});

/*Selecciona el método de calculo de flujo segun el peso */
function calcularFlujo(peso){
    if(peso <= 30){
        return calcularHollidaySegar(peso);
     }
    else{
        return calcularSuperficieCorporal(peso);
    }
}

/*Realiza el calculo de flujo según el método holliday-segar*/
function calcularHollidaySegar(peso){
    if (peso > 20){
        return ((peso-20)*20 + 10*50 + 10*100);
    }
    else if(peso > 10){
        return ((peso - 10)*50 + 10*100);
    }
    else{
        return peso*100;
    }
}

/*Realiza el calculo de flujo según el método de la superficie corporal */
function calcularSuperficieCorporal(peso){
    return ( (peso * 4) + 7) / (peso + 90);
}

/* Calcula el mantenimiento diario según el flujo */
function calcularMantenimiento(cantidad){
    return (cantidad/24);
}

/* Calcula mantenimiento diario superior */
function calcularMantenimientoSuperior(mantenimiento){
    return (mantenimiento*1.5);
}