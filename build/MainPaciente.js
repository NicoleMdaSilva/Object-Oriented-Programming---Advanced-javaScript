"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paciente_1 = require("./Paciente");
var paciente = new Paciente_1.Paciente('Carla', 28, 123454324, true);
console.log("A Paciente ".concat(paciente.nome, "\n").concat(paciente.idade, " anos\nCpf: ").concat(paciente.CPF));
paciente.status();
