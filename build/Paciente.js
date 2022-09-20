"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nome, idade, CPF, liberado) {
        this.nome = nome;
        this.idade = idade;
        this.CPF = CPF;
        this.liberado = liberado;
    }
    Paciente.prototype.status = function () {
        if (this.liberado == true) {
            console.log("O paciente est\u00E1 liberado");
        }
        else {
            console.log("O Paciente ainda n\u00E3o foi liberado");
        }
    };
    return Paciente;
}());
exports.Paciente = Paciente;
