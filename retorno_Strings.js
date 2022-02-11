//Criar um metodo para ler prorpiedades de um objeto
//exibir somente as propriedades do tipo string que estão no objeto

const carro = {
    modelo: "uno",
    ano: 2017,
    marca: "fiat",
    km_Rodados: 70000,
    modo: "casual"
}

exibirPropriedades(carro)
function exibirPropriedades(obj){
    for (prop in obj){
        if(typeof obj[prop] === "string"){
            console.log(prop, obj[prop])
        } 
    }
}