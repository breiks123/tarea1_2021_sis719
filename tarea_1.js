////pregunta 1////
/*function primo(a) {
    //revisa si n es multiplo de 2
    for (var i = 2; i < a; i++) {
        if (a % i == 0)
            return false;
    }
    return true;
}
if (primo(4) == true) {
    console.log("Es primo");
}
else {
    console.log("No es primo");
}*/
function inv_cad(cadena) {
    var x = cadena.length;
    var cadenaInvertida = " ";
    while (x >= 0) {
        cadenaInvertida = cadenaInvertida + cadena.charAt(x);
        x--;
    }
    return cadenaInvertida;
}
console.log(inv_cad("perro"));
