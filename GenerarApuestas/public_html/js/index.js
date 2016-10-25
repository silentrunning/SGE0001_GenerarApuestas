"use strict";
Math.generaApuestas = generaApuestas; //añadimos la funcion generaApuestas a la clase estática Math
var strNumeroApuestas = prompt("¿cuántas combinaciones quieres?");
mostrarApuestas(ordenaApuestas(Math.generaApuestas(strNumeroApuestas)));

/**
 * 
 * @param {type} numeroApuestas indica el tamaño del array que queremos generar
 * @returns {Array|generaApuestas.aListaApuestas} un Array de apuestas de loteria (cada apuesta esta representada como un array de 6 numeros enteros)
 */
function generaApuestas(numeroApuestas) {
    if (!(/^(([1-9][0-9])|([0]*[1-9]))$/.test(numeroApuestas))) {
        throw new Error("El rango está entre 1 y 99");
    }
    var aListaApuestas = new Array();
    var intNumeroApuestas = parseInt(numeroApuestas);
    var intI = 0;
    while (intI < intNumeroApuestas) {
        var aApuestaIndividual = crearCombinacion();
        if (noEsta(aApuestaIndividual, aListaApuestas)) {
            intI++;
            aListaApuestas.push(aApuestaIndividual);
        }
    }
    return aListaApuestas;
}

/**
 * 
 * @returns Array de seis elementos distintos (enteros entre 1 y 49) ordenados de menor a mayor.
 */
function crearCombinacion() {
    var aNumeros = new Array(49);
    for (var intI = 0; intI < aNumeros.length; intI++) {
        aNumeros[intI] = intI + 1;
    }
    var aCombinacion = new Array(6);
    for (var intI = 0; intI < aCombinacion.length; intI++) {
        var intRandom = Math.floor(Math.random() * aNumeros.length);
        aCombinacion[intI] = aNumeros.splice(intRandom, 1);
    }
    aCombinacion.sort((a, b) => a - b); // notación arrow Functions: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions
    return aCombinacion;
}

/**
 * 
 * @param {type} apuestaIndividual
 * @param {type} aListaApuestas
 * @returns {Boolean} true en caso de que apuestaIndividual tenga el mismo valor como String que un elemento del array aListaApuestas
 */
function noEsta(apuestaIndividual, aListaApuestas) {
    for (var intI = 0; intI < aListaApuestas.length; intI++) {
        if (aListaApuestas[intI].toString() === apuestaIndividual.toString()) {
            return false;
        }
    }
    return true;
}

/**
 * 
 * @param {type} aListaDeApuestas 
 * @returns {unresolved} el array que le hemos pasado como parametro ordenado de menor a mayor
 */
function ordenaApuestas(aListaDeApuestas) {
    aListaDeApuestas.sort(function (a, b) {// la funcion anónima compara cada uno de los componentes, de dos elementos de aListaDeApuestas
        var intI = 0;
        while (a[intI] - b[intI] === 0 && intI < a.length - 1) {
            intI++;
        }
        return a[intI] - b[intI];
    });
    return aListaDeApuestas;

}

/**
 *  escribe un fichero html con todos los elementos del array aCombinaciones que le pasamos por parametro
 * @param {type} aCombinaciones
 * 
 */
function mostrarApuestas(aCombinaciones) {
    document.write("<h2>" + aCombinaciones.length + " apuestas generadas</h2>");
    document.write("<table>");
    for (var intI = 0; intI < aCombinaciones.length; intI++) {
        document.write("<tr><td>" + (intI + 1) + "</td><td> " + aCombinaciones[intI].toString() + "</td></tr>");
    }
    document.write("</table>");
}