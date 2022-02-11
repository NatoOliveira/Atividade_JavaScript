//Receber uma quantidade de valores para avaliar função exibir se cada valor é impar ou par.

let numeros = exibirNumeros(10)

function exibirNumeros(valores){
    for(let i = 1; i <= valores; i++){
        if(i % 2 === 0)
            console.log(i,"par");
        else
            console.log(i, "impar");
    }
}