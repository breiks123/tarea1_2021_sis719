////pregunta 8////
function primo(a) {
    if (a == 1 || a == 0) {
        return false;
    }
    for (var i = 2; i < a; i++) {
        if (a % i == 0)
            return false;
    }
    return true;
}
function llenar() {
    var arr = [];
    for (var i = 1; i <= 10000; i++) {
        if (primo(i) == true) {
            arr.push(i);
        }
    }
    return arr;
}
var limite = 6;
var temp = llenar();
for (var h = 0; h < limite; h++) {
    console.log(temp[h]," ");
}

