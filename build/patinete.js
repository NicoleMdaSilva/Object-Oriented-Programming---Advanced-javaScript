"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patinete = void 0;
var Patinete = /** @class */ (function () {
    function Patinete(nome, marca, cor, quebrado) {
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.quebrado = quebrado;
    }
    Patinete.prototype.podeAndar = function () {
        if (this.quebrado = true) {
            console.log("est\u00E1 quebrado!");
        }
        else {
            console.log("est\u00E1 funcionando!!");
        }
    };
    return Patinete;
}());
exports.Patinete = Patinete;
