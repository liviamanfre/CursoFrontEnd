// Atividade 4: Criar um sistema de Funcionários 

class Funcionario{
    //encapsulamento dos atributos 
    #nome
    #cargo
    #salario

    //construtor
    constructor(nome,cargo, salario){
        this.#nome = nome;
        this.#cargo = cargo;
        this.#salario = salario;
    }

    //métodos

    aumentarSalario(porcentagem){
        if(percentagem> 0){
            this.#salario += this.#salario *(percentagem/100);
            console.log(`Aumento de ${percentagem}% concedido!`);
        } else{
            console.log("Percentagem inválida!");
        }
    }
    //getters and setters 
    set setCargo(cargo){
    this.#cargo = cargo;
    }
    exibirInfo(){
        console.log(`Nome: ${this.#nome}, Cargo: ${this.#cargo}, Salario: R$ ${this.#salario}`);
    }
}

//instanciar os objetos 
let funcionario1 = new Funcionario("Maria", "Gerente", 5000);
funcionario1.exibirInfo();
funcionario1.setCargo = "Diretora";
funcionario1.aumentarSalario(30);
funcionario1.exibirInfo();