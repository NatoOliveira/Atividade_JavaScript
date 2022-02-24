let ano = prompt("Digite em que ano nasceu: ");
let dia = prompt("Digite em que dia nasceu: ");
let mes = prompt("Digite em que mês nasceu: ");

let anos = 365 * ano;
let meses = 30 * mes;

let diasdevida = anos + meses + dia;

console.log(diasdevida);