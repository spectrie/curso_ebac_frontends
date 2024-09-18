function multiplicacao(num1: number, num2:number):number{
    return num1 * num2;
}

let nome: string;
function dizOla(nome: string): string{
    return `Olá ${nome}`
}

let multi = multiplicacao(2,2);
let nme = dizOla('João');

console.log(multi);
console.log(nme);