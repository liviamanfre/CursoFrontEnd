// Adicionar Elementos Avançados com DOM
//Construir um cabeçalho com DOM (Header)

let header = document.createElement("header"); //criou elemento
header.style.backgroundColor = "black"; 
header.style.height = "8vh"; 
document.body.appendChild(header); //adicionando o header com elementos filho do body
document.body.style.margin = "0"; //retirando a margin do body

//adicionar elementos no header
let divNav =document.createElement("div");
divNav.style.display = "flex"
divNav.style.justifyContent = "space-arround";
divNav.style.color = "aliceblue";
divNav.style.height = "100%";
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "Arial";
header.appendChild(divNav);

let itensNav = ["Home", "Produtos", "Contato"]; 
//adicionar itens na Nav
itensNav.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element; 
    divNav.appendChild(item);
});

//faça um Rodapé com Dom
let footer = document.createElement("footer");
footer.style.backgroundColor = "black";
footer.style.height = "10vh";
footer.style.position = "Fixed";
footer.style.bottom = "0";
footer.style.width = "100%";
document.body.appendChild(footer);

let divFooter = document.createElement("div");
divFooter.style.display = "flex";
divFooter.style.justifyContent = "space-between";
divFooter.style.height = "100%";
divFooter.style.width = "90%";
divFooter.style.margin = "0 auto"; 
divFooter.style.alignItems = "start";
divFooter.style.color = "aliceblue";
divFooter.style.fontSize = "2vh";
divFooter.style,fontFamily = "Comic Sans MS";
footer.appendChild(divFooter);

//criar o texto para footer
let menuFooter = ["End. Rua Senai, 1000", "Tel. 19-9999-99999", "Email: liviamanfre@gmail.com" , "@CopyRight 2025"];
//foreeach para adicionar os intes no footer 
menuFooter.forEach(item =>{
    let p = document.createElement("p");
    p.innerText = item;
    divFooter.appendChild(p);
});


// Clonando Elementos com DOM
let card = document.createElement("div");
card.classList.add("card"); // adiciona a classe card no elemento
card.style.width = "120px";
card.style.height = "200px";
card.style.backgroundColor = "blue";
// criar container para adicionar os cards
let container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.margin = "0 auto";
container.style.width = "90%";
container.style.flexWrap = "wrap";
//criar um botão para clonar o card
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
btnClonar.id = "btnClonar";
document.body.appendChild(btnClonar);//add btn ao body
document.body.appendChild(container);//add container ao body
container.appendChild(card);//add card ao container
//adicionar evento ao botão
btnClonar.addEventListener("click", () =>{
    let clone = card.cloneNode(true); //clona o card
    container.appendChild(clone); // add o clone ao container
})

//criar botão para adicionar modo escuro 
let chave = document.createElement("input");
chave.type = "checkbox"; 
chave.id = "darkMode";
chave.style.position = "fixed";
chave.style.top = "10px";
chave.style.right = "10px";
document.body.appendChild(chave); 
// criar um evento para adicionar o modo escuro 
chave.addEventListener("change", () => {
    document.body.classList.toggle("darkMode");
})

// eventos avançados com Dom 
// captyrando letra digitada -> de uma function 
document.addEventListener("keydown", (Event)=>{
    console.log("Tecla pressionada: " +event.key);
}) 

//função para sugestão de texto -> 
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Digite para buscar...";
document.body.appendChild(input);
//criar lista de sugestões 
let lista = document.createElement("ul");
lista.id = "sugestoes";
document.body.appendChild(lista);
//criar um vetor de sugestões 
let sugestoes = [
    "JavaScript", "Java", "Python", "C#", "PHP", "Dart", "Kotlin"
];

//evento para capturar o texto e sugerir
document.getElementById("busca").addEventListener("keyup", ()=>{
    let texto = input.value.toLowerCase();
    lista.innerHTML = "";
    sugestoes.forEach( sugestao => {
        if(sugestao.toLowerCase().includes(texto)){
            let item = document.createElement("li");
            // selecionando item da lista -> click
            item.style.cursor = "pointer"; 
            item.addEventListener("click",()=>{
                input.value = sugestao;
                lista.innerHTML = "";
            })
            item.innerText = sugestao;
            lista.appendChild(item);
        }
    });

})

//criação de formulário e evento de verificação 

let form = document.createElement("form");
form.id = "formCadastro";
document.body.appendChild(form);
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu Nome";
inputNome.id = "nome";
form.appendChild(inputNome);
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "Digite seu Email";
inputEmail.id = "email";
form.appendChild(inputEmail);
//botão de envio do form
let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);
// adicionar um "p" para mostar as mensagens de validação do form
let p = document.createElement("p");
p.id = "mensagem";
document.body.appendChild(p); 

//evento de validação do formulário
document.getElementById("formCadastro").addEventListener("submit", (event) =>{
    event.preventDefault(); // não recarrega a tela 
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem"); 

    //condição 
    if( nome ==="" || email ===""){
        mensagem.innerText = "Preencha Todos os Campos!";
        mensagem.style.color = "red";
    } else{
        mensagem.innerText = "Cadastro Realizado com Sucesso!!!";
        mensagem.style.color = "green";
        //limpar os campos
        nome = "";
        email = "";
    }
});

