// Cadastro de usuários

// name: string
// email: string;
// Telefone: number;
// menssagem: string;

interface Login {
    name: string;
    email: string;
    Telefone: number;
    // definido como opcional (?)
    messagem?: string;
}

class CadastroServer {
    execute({name, email, Telefone, messagem}:Login){
        console.log(name, email, Telefone, messagem);
    }
}

export default new CadastroServer();