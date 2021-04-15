////pregunta 4////
function calculo(arr) {
    var producto;
    if (arr.length == 1) {
        producto = arr[0];
    }
    else {
        producto = arr[0] * arr[1];
        for (var i = 0; i < arr.length; i++) {
            if (i == arr.length - 1) {
                if (arr[i] > producto) {
                    producto = arr[i];
                }
            }
            else {
                if (arr[i] * arr[i + 1] > producto) {
                    producto = arr[i] * arr[i + 1];
                }
            }
        }
    }
    return producto;
}
//var arr = [-1, -2]
var arr = [3, 6, -2, -5, 7, 3]
//var arr = [1, 0, 1, 0, 1000]
console.log("Producto Mayor : ", calculo(arr));