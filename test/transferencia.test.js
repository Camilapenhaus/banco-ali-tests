import { expect } from 'chai'
import request from 'supertest'
import 'dotenv/config'

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        it('deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de 10 reais', async () => {
            const respostaLogin = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    username: 'julio.lima',
                    senha: '123456'
                })

            const token = respostaLogin.body.token
            

            const respostaTransferencia = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ''
                    })
                    expect(respostaTransferencia.status).to.equal(201)
                    console.log(respostaTransferencia.body)

})

        it('deve retornar falha com 422 quando o valor da transferência for abaixo de 10 reais', async () => {
            const respostaLogin = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    username: 'julio.lima',
                    senha: '123456'
                })

            const token = respostaLogin.body.token


            const respostaTransferencia = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 7,
                    token: ''
                    })
                    expect(respostaTransferencia.status).to.equal(422)
                    console.log(respostaTransferencia.body)

})

})

})