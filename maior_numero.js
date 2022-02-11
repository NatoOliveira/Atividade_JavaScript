//escreva uma função que usa 2 números e retorne o maior entre eles
let numero = maiorValor(8,9);
console.log(numero);
function maiorValor(numero1,numero2){
    if(numero1 > numero2)
        return numero1;
    else
        return numero2;
}