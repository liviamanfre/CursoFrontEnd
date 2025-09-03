// montar o schema da tabela 


import mongoose from "mongoose";


//function para definir o schema
const TodoSchema = new mongoose.Schema({
    title:{ type: String, 
            required:[true,"O título é Obrigatório"],
            trim: true, // remove os espaços  do início e do fim
            maxlength: [100, "não pode mais de 100char"] //limite de caracteres
        },
    completed: {
        type: Boolean,
        default: false, //padrão é falso
    },
    createdAt: {
        type: Date,
        default: Date.now, //data atual
    }
});

export default TodoSchema; 