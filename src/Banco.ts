class Banco{
    public nome: string;
    public idade: number;
    public senha: string;
    public conta: number;

    constructor(nome: string, idade: number, senha: string, conta: number){
        this.nome = nome;
        this.idade = idade;
        this.conta = conta;
        this.senha = senha;
    }


}
export { Banco }