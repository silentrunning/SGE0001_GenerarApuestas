# SGE0001_GenerarApuestas

Página web en la que solicite desde una caja de diálogo prompt un número entero entre 1 y 99.

Se calcularán tantas combinaciones de la primitiva como indique el número. Cada combinación debe
mostrar sus 6 números (entre 1 y 49) de forma ascendente y sin repetir. No puede haber dos
combinaciones de 6 números repetidas. Los resultados se mostrarán sobre la página web con
document.write y se le dará formato para que la presentación sea como se vea en la figura.



La codificación para obtener las distintas combinaciones se realizará dentro de un método de la clase
Math con nombre **generaApuestas** que devolverá un array con tantas filas como número de
combinaciones se han solicitado, y además será el único argumento de la función. En el código de la
función se controlará el contenido del argumento pasado desencadenando errores en tiempo de
ejecución si no se ajustase a los requerimientos.




