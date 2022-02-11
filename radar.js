//velocidade maxima de até 70km
//a cada 5km acima do limite você ganha 1 ponto
//Math.floor() --> para arredondar o valor
//caso pontos maior que 12 --> "carteira suspensa"

const velocidadedavia = 70;
const aCadaKm = 5;

let carro = velocidadeMaxima(80);

function velocidadeMaxima(km){
    if(km <= velocidadedavia){
        console.log('Ok');
    }    
    else{
        const pontos = Math.floor(((km - 70)/aCadaKm));
            if(pontos < 12)
                console.log("pontos: ",pontos);
            else
                console.log("carteira suspensa");
    }
}