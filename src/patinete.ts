class Patinete{
    public nome: string;
    public marca: string
    public cor: string;
    public quebrado: boolean;

    constructor(nome: string, marca: string, cor: string, quebrado: boolean){
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.quebrado = quebrado;
    }

    public podeAndar(){
        if(this.quebrado = true){
            console.log(`está quebrado!`);
        }
        else{
            console.log(`está funcionando!!`);
        }
    }

    
}

export { Patinete }