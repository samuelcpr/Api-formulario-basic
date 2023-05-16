import { Request, Response } from 'express'
import CadastroServer from './cadastro'



export function cadastrosUser(request: Request, response: Response) {
    CadastroServer.execute({
        name: "Samuel", 
        email: "Samuel@MediaList.com", 
        Telefone: 62900000000, 
        messagem: "isso é um teste"
    })

    CadastroServer.execute({
        name: "Mariana", 
        email: "Mariana@MediaList.com", 
        Telefone: 62900000000, 
       
    })

    return response.send()
}