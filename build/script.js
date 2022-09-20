"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var patinete_1 = require("./patinete");
var patinete = new patinete_1.Patinete('X1-09', 'Polimetro', 'Rosa', true);
console.log("O patinete ".concat(patinete.nome, " da marca ").concat(patinete.marca, " da cor ").concat(patinete.cor, " e ele ").concat(patinete.quebrado));
