function Pokemon(nome, tipo, habilidade, nivel){

    this.nome = nome;
    this.tipo = tipo;
    this.habilidade = habilidade;
    this.nivel = nivel;

    this.usarHabilidade = function(){
        if(tipo === 'Eletrico'){
            console.log('Usa: Choque do trovão!!');
        }else if(tipo === 'Voador'){
            console.log('Usa: Rajada de fogo!!');
        }else{
            console.log('Usa: Water pulse!!')
        }
    }
}

function PokemonEvoluido(nome, tipo, habilidade, nivel){
    Pokemon.call(this, nome, tipo, habilidade,nivel)
    if(nome === 'Pikachu'){
        this.nome = 'Raichu';
    }else if(nome === 'Charmeleon'){
        this.nome = 'Charizard';
    }else{
        this.nome = 'Wartortle';
    }
}

const pokemon1 = new Pokemon("Pikachu", "Eletrico", "Choque do trovão");
const pokemon2 = new Pokemon("Charmeleon", "Voador", "Rajada de fogo");
const pokemon3 = new Pokemon("Squirtle", "Agua", "Water pulse");

const pokemonEvoluido1 = new PokemonEvoluido("Pikachu", "Eletrico", "Choque do trovão");
const pokemonEvoluido2 = new PokemonEvoluido("Charmeleon", "Voador", "Rajada de fogo");
const pokemonEvoluido3 = new PokemonEvoluido("Squirtle", "Agua", "Water pulse");

console.log(pokemon1.nome);
pokemon1.usarHabilidade();
console.log('Evoluiu para:' + pokemonEvoluido1.nome);
console.log('');

console.log(pokemon2.nome);
pokemon2.usarHabilidade();
console.log('Evoluiu para: ' + pokemonEvoluido2.nome)
console.log('');

console.log(pokemon3.nome);
pokemon3.usarHabilidade();
console.log('Evoluiu para: ' + pokemonEvoluido3.nome)

