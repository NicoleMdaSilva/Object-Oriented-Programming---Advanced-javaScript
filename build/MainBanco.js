"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Banco_1 = require("./Banco");
var banco = new Banco_1.Banco('Nicole', 19, '123456', 500);
if (banco.senha === '123456') {
    console.log('Acesso permitido!');
    console.log("Nome: ".concat(banco.nome, "\nIdade: ").concat(banco.idade, " \nSaldo Bancario: R$").concat(banco.conta));
}
else {
    console.log('Acesso Negado');
}
