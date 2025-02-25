// 1. Criando e Manipulando Arrays

// Criação de Array Frutas 
let frutas = ["maça", "banana", "laranja", "uva"];

// a. Exibe o segundo elemneto do Array 
 console.log(frutas[1]); // "banana"

 // b. Adiciona a fruta "melancia" no final do Array 
frutas.push("melancia");

// c. Remove o primeiro elemento do Array
frutas.shift();

// d. Exibe o comprimento do Array atualizado 
console.log(frutas.length); // O comprimento final do Array 


// 2. Iterando sobre Arrays

// Criando um Array com os números de 1 a 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a. Percorre o array e exibe todos os números no console usando um loop for
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// b. Usa o método forEach para exibir os números 
numeros.forEach(function(numero) {
    console.log(numero);
})