"use strict";
Math.generaApuestas = generaApuestas; //añadimos la funcion generaApuestas a la clase estática Math
var strNumeroApuestas = prompt("¿cuántas combinaciones quieres?");
mostrarApuestas(ordenaApuestas(Math.generaApuestas(strNumeroApuestas)));

/**
 * 
 * @param {type} numeroApuestas
 * @returns {Array|generaApuestas.aListaApuestas}
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
 * @returns un Array de seis elementos distintos (enteros entre 1 y 49) ordenados de menor a mayor.
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
    aCombinacion.sort((a, b) => a - b);
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
 * @param {type} aCombinaciones
 * @returns {unresolved} el array que le hemos pasado ordenado
 */
function ordenaApuestas(aCombinaciones) {
    aCombinaciones.sort(function (a, b) {
        var intI = 0;
        while (a[intI] - b[intI] === 0 && intI < a.length - 1) {
            intI++;
        }
        return a[intI] - b[intI];
    });
    return aCombinaciones;

}

/**
 *  escribe un fichero html con todos los elementos del array aCombinaciones que le pasamos por parametro
 * @param {type} aCombinaciones
 * 
 */
function mostrarApuestas(aCombinaciones) {
    document.write("<h2>" + aCombinaciones.length + " apuestas generadas.</h2>");
    document.write("<table>");
    for (var intI = 0; intI < aCombinaciones.length; intI++) {
        document.write("<tr><td>" + (intI + 1) + "</td><td> " + aCombinaciones[intI].toString() + "</td></tr>");
    }
    document.write("</table>");
}