////pregunta 5////
function estatuas(arr) {
    var ordenando = arr.sort();
    var llenar = [];
    var a = ordenando[0];
    var b = ordenando[ordenando.length - 1];
    for (var i = a; i <= b; i++) {
        llenar.push(i);
    }
    var tam = ordenando.length - llenar.length;
    return Math.abs(tam);
}
//var arr = [6, 2, 3, 8];
//var arr = [5, 4, 6];
var arr = [0, 3];
// 2,3,4,5,6,7,8
// 2,3,6,8
console.log("Se requiere :  ", estatuas(arr), "estatuas");
