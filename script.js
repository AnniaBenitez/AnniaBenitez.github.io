const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

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

function calcularFlujo(peso){
    if(peso <= 30){
        return calcularHollidaySegar(peso);
     }
    else{
        return calcularSuperficieCorporal(peso);
    }
}

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

function calcularSuperficieCorporal(peso){
    return ( (peso * 4) + 7) / (peso + 90);
}

function calcularMantenimiento(cantidad){
    return (cantidad/24);
}

function calcularMantenimientoSuperior(mantenimiento){
    return (mantenimiento*1.5);
}