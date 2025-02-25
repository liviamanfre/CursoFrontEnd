//declaração de um Array
let array = []; //aray dinâmico

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTexto = ["Sapato", "Caixa", "Meia"];
let arraymisto = [1, "José", true];

//tamanho de um array
console.log(arrayNumeros.length); //9

//acessar um elemento do array (index)
console.log(arrayTexto[1]); // posição -1

//adicionar elemnetos no array
// no começo
arrayTexto.unshift("Tênis");
console.log(arrayTexto);
// no fim
arrayTexto.push("Chinelo"); 
console.log(arrayTexto);

//trocar valo 
arrayTexto[2] = "Sacola";
console.log(arrayTexto);

//remover elementos do array
// no começo (shift)
arrayTexto.shift();
console.log(arrayTexto);
// no final (pop)
arrayTexto.pop();
console.log(arrayTexto);

//percorrer um array (laço de repetição)
//percorrer o array de números 
for(let i =0;i<arrayNumeros.length;i++){
    console.log("índice["+i+"]="+[arrayNumeros[i]])
}
