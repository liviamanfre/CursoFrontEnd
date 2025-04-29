// Atividade 3: Criar uma classe represe

class ContaBancaria{
    //encapsular atributos 
    #titular
    #saldo
    //construtor
    constructor(titular){
        this.#titular = titular;
        this.#saldo =0; //inicia a conta = 0
    }
    //métodos
    depositar(valor){
        if(valo > 0){
            this.#saldo +=valor;
            console.log(`Deposito realizado com sucesso!`)
        }else{
            console.log(`Valor inválido para deposito!`);
        }
    }
    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log("Saque realizado com sucesso!");
        }else if(valor > this.#saldo){
            // if else encadeado
            console.log(`Saldo insuficiente!`);
        }else{
            console.log(`Valor inválido para saque!`);
        }
    }

    exibirSaldo(){
        console.log(`Titular: ${this.#titular}, Saldo: ${this.#saldo}`);
    }
}

//instanciar os objetos 
let conta1 = new ContaBancaria("José Pererira");
conta1.depositar(1000);
conta1.exibirSaldo();
conta1.sacar(500);
conta1.exibirSaldo();
conta1.sacar(600);
conta1.exibirSaldo();