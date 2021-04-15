////pregunta 3////
function palindromo(str){
    var normalized = str.toLowerCase().match(/[a-z]/gi).reverse();
    return normalized.join('') === normalized.reverse().join('');
}       
if(palindromo("doctor")){
    console.log("Es palindromo");
}else{
    console.log("No es palindromo");
}       