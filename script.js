const CALCULAR = document.getElementById('calcular');       //constante direccion del boton calcular
const ERROR = document.getElementById('error');             //Constante direccion del texto de error
const FLU = document.getElementById('flujo');               //Constante direccion del texto del flujo
const MAN = document.getElementById('mantenimiento');       //Constane direccion del texto de mantenimiento
const MANSUP = document.getElementById('mantenimientoSup'); //Constane direccion del texto de mantenimiento
const MAN1500 = document.getElementById('mant1500');        //Constane direccion del texto de mantenimiento
const MAN2000 = document.getElementById('mant2000');        //Constane direccion del texto de mantenimiento
const METODO = document.getElementById('metodo');           //Contiene la direccion de impresion del metodo utilizado


/*El listener reacciona ante el boton, al ser presionado
El evento se encarga de calcular un flujo y mantenimiento según
el peso ingresado en la caja input*/
CALCULAR.addEventListener('click', () => {
    const PESO = document.getElementById('peso').value
    if (PESO > 0){
        ERROR.style.display = 'none';
        calcularFlujo(PESO);
    }
    else{
        ERROR.style.display = 'block';
    }
});

/*Selecciona el método de calculo de flujo segun el peso */
function calcularFlujo(peso){
    if(peso <= 30){
        MAN1500.style.display = 'none';
        MAN2000.style.display = 'none';
        METODO.innerHTML = '<b>Metodo utilizado:</b> Holliday-Segar'; 
        let flujo = calcularHollidaySegar(peso);
        FLU.innerHTML = '<b>Flujo: </b>' + flujo + ' cc/hr';
        MAN.innerHTML = '<b>Mantenimiento:</b> ' + calcularMantenimiento(flujo) + ' cc/hr';
        MANSUP.innerHTML = '<b>Mantenimiento Superior (m+m/2): </b>' + (calcularMantenimiento(flujo)*1.5) + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        MANSUP.style.display = 'block';
     }
    else{
        MAN.style.display = 'none';
        MANSUP.style.display = 'none';
        METODO.innerHTML = '<b>Metodo utilizado:</b> Cálculo de Superficie Corporal'; 
        let flujo = calcularSuperficieCorporal(peso);
        FLU.innerHTML = '<b>Flujo: </b>' + flujo + ' cc/hr';
        MAN1500.innerHTML = '<b>MantenimientoX1500: </b>' + calcularMantenimiento(flujo)*1.5*1500 + ' cc/hr';
        MAN2000.innerHTML = '<b>MantenimientoX2000: </b>' + calcularMantenimiento(flujo)*1.5*2000 + ' cc/hr';
        FLU.style.display = 'block';
        MAN1500.style.display = 'block';
        MAN2000.style.display = 'block';
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
    return (( (peso * 4) + 7) / (peso + 90)).toFixed(3);
}

/* Calcula el mantenimiento diario según el flujo */
function calcularMantenimiento(cantidad){
    return (cantidad/24).toFixed(3);
}