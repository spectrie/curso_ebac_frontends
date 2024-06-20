const form = document.getElementById('form-atividade');
const imgaprovado = '<img src="./images/images/aprovado.png" alt="emoji celebrando"/>';
const imgreprovado = '<img src="./images/images/reprovado.png" alt="emoji decepcionado"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="Aprovado">Aprovado</span>';
const spanReprovado = '<span class="Reprovado">Reprovado</span>';
const notaminima = parseFloat(prompt("Digite a nota miníma:"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionalinha();
    atualizatabela();
    atualizanotafinal()
    });

function adicionalinha(){
    const inputnomeatividade = document.getElementById('nome-atividade');
    const inputnotaatividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputnomeatividade.value)){
        alert(`A atividade: ${inputnomeatividade.value} já foi inserida`)
    }
    else{
        
    }

    atividades.push(inputnomeatividade.value);
    notas.push(parseFloat(inputnotaatividade.value));

    let linha = '<tr>';
    linha += `<td> ${inputnomeatividade.value}</td>`;
    linha += `<td> ${inputnotaatividade.value}</td>`;
    linha += `<td> ${inputnotaatividade.value >=7 ? imgaprovado : imgreprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

    inputnomeatividade.value = '' ;
    inputnotaatividade.value = '' ;
}
    function atualizatabela(){
        const corpotabela = document.querySelector('tbody');
        corpotabela.innerHTML = linhas;
    }

    function atualizanotafinal(){
        const mediafinal = calculamediafinal();

        document.getElementById('media-final-valor').innerHTML = mediafinal
        document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaminima ? spanAprovado : spanReprovado
    }
    function calculamediafinal(){
        let somadasnotas = 0;
        for(var i = 0; i < notas.length; i++){
            somadasnotas += notas[i];
        }
            return somadasnotas / notas.length
    }