import { Banco } from "./Banco";

const banco = new Banco('Nicole', 19, '123456', 500);

if(banco.senha === '123456'){
    console.log('Acesso permitido!');
    console.log(`Nome: ${banco.nome}\nIdade: ${banco.idade} \nSaldo Bancario: R$${banco.conta}`);
}else{
    console.log('Acesso Negado');
}

