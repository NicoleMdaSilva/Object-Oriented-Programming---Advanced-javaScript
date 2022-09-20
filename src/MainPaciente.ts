import { Paciente } from "./Paciente";
import { Patinete } from "./patinete";

const paciente = new Paciente('Carla', 28, 123454324, true);

console.log(`A Paciente ${paciente.nome}\n${paciente.idade} anos\nCpf: ${paciente.CPF}`);
paciente.status();