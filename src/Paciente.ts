class Paciente{
    public nome: string;
    public idade: number;
    public CPF: number;
    public liberado: boolean

    constructor(nome: string, idade: number, CPF: number, liberado: boolean){
        this.nome = nome;
        this.idade = idade;
        this.CPF = CPF;
        this.liberado = liberado;
    }

    public status() {
        if(this.liberado == true){
            console.log(`O paciente está liberado`);
        }else{
            console.log(`O Paciente ainda não foi liberado`);
        }
    }

}
export {Paciente}
