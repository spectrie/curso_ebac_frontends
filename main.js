const objetos = [
    {nome: "maria", nota: 8},
    {nome: "joão", nota: 4},
    {nome: "tiago", nota: 7}
];

function notasMaior6(objetos){
    return objetos.filter(objetos => objetos.nota >= 6);
}

const notasFiltradas = notasMaior6(objetos);

console.log(notasFiltradas);