//media de nota escolar
//obter a media a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const arrays = [70,80,90];
console.log(mediaDoAluno(arrays));

function mediaDoAluno(notas){
    let soma = 0;
    for(let nota of notas){
        soma += nota;
    }
    const media = soma/(notas.length);

        if(media < 59) return "Nota E";
        if(media < 69) return "Nota D";
        if(media < 79) return "Nota C";
        if(media < 89) return "Nota B";
        return "Nota A";
}