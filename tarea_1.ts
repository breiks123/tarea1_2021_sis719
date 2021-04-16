////pregunta 10 ////
function ValidarIp(str) {
    var verdad = str.split('.');
    if (verdad.length != 4)
        return false;
    for (var i in verdad) {
        if (!/^\d+$/g.test(verdad[i])
            || +verdad[i] > 255
            || +verdad[i] < 0
            || /^[0][0-9]{1,2}/.test(verdad[i]))
            return false;
    }
    return true;
}
console.log(ValidarIp("192.168.1.255"));
console.log(ValidarIp("255.255.255.255"));
console.log(ValidarIp("0.0.0.0"));
console.log(ValidarIp("30.168.1.255.1"));
console.log(ValidarIp("127.1"));


