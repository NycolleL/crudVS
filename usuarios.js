'use strict'

async function listarUsuarios () {
     const url = 'http://10.107.140.2:8080/usuarios/'
     const response = await fetch(url)
     const data  = await response.json()
     console.log(data)
     return data
}

async function cadastrarUsuario (usuario){
    const url = 'http://10.107.140.2:8080/usuarios/'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        }

        const response = await fetch(url, options)
        console.log(response.ok)
        return response.ok
}

async function atualizarUsuario (usuario) {
    const url = `http://10.107.140.2:8080/usuarios/$(usuario.id)`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }

    const response = await fetch(url, options)
    console.log (response.ok)
    return response.ok
}

// Local de teste 
// const novoUsuario = {
//     nome: 'Nycolle Lima',
//     email: 'nycolle@gmail.com'
// }

// cadastrarUsuario(novoUsuario)

const usuarioAtualizado = {
    id: '5',
    nome: 'Teste 123',
    email: 'teste@gmial.com'
}

atualizarUsuario(usuarioAtualizado)

listarUsuarios()