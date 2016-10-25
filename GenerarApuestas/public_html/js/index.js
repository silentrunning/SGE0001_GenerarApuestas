"use strict";
var strNumeroApuestas = prompt("¿cuántas combinaciones quieres?");
Math.generaApuestas = generaApuestas;
var aApuestas = Math.generaApuestas(strNumeroApuestas);
mostrarApuestas(aApuestas);


function generaApuestas(numeroCombinaciones) {
    if (!(/^(([1-9][0-9])|([0]*[1-9]))$/.test(numeroCombinaciones))) {
        throw new Error("El rango está entre 1 y 99");
    }
    var aListaApuestas = new Array();
    var intNumApuestas = parseInt(numeroCombinaciones);
    var intI = 0;
    while (intI < intNumApuestas) {
        var aApuestaIndividual = crearCombinacion();
        if (noEsta(aApuestaIndividual, aListaApuestas)) {
            intI++;
            aListaApuestas.push(aApuestaIndividual);
        }
    }
    return aListaApuestas;
}
/**
 * nos devuelve una combinacion de loteria
 * @returns 
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



function noEsta(apuestaIndividual, aApuestas) {
    for (var intI = 0; intI < aApuestas.length; intI++) {
        if (aApuestas[intI].toString() === apuestaIndividual.toString()) {
            return false;
        }
    }
    return true;
}
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


function mostrarApuestas(aCombinaciones) {
    ordenaApuestas(aCombinaciones);
    document.write("<h2>" + aCombinaciones.length + " apuestas generadas.</h2>");
    document.write("<table>");
    for (var intI = 0; intI < aCombinaciones.length; intI++) {
        document.write("<tr><td>" + (intI + 1) + "</td><td> " + aCombinaciones[intI].toString() + "</td></tr>");
    }
    document.write("</table>");
}