//Atividade 2: Criar uma classe um veículo 
// atributos: marca, modelo, ano 
// métodos: exibir os detalhes do veículo 

class Veiculo{
    //encapsulamento dos atributos 
    #marca
    #modelo
    #ano
    //construtor
    constructor(marca, modelo, ano){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }
    //métodos 
    exibirInfo(){
        console.log(`Marca: ${this.#marca}, Modelo: ${this.#modelo}, Ano: ${this.#ano}`);
    }
}
//subclasse carro  
class Carro extends Veiculo {
    //Encapsular os atributos
    #quantidadePortas;
    //construtor 
    constructor(marca, modelo, ano, quantidadePortas){
        super(marca, modelo, ano); // Chama o construtor de classe pai 
        this.#quantidadePortas = quantidadePortas;
    }
    //método
    exibirInfo(){
        super.exibirInfo(); // Chama o método da classe pai 
        console.log(`Quantidade de Portas: ${this.#quantidadePortas}`);
    }
}

//instanciar um objeto 
let carro1 = new Carro("Fiat", "Uno", 1994, 2); 
carro1.exibirInfo();