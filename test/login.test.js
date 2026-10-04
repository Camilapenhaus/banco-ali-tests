import { expect } from 'chai'
import request from 'supertest'

describe('Login', () => {
  describe('POST /login', () => {
    it('deve retornar 200 e um token como texto com credenciais válidas', async () => {
      const resposta = await request('http://localhost:3000')
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
          username: 'julio.lima',
          senha: '123456'
        })

      expect(resposta.status).to.equal(200)
      expect(resposta.body.token).to.be.a('string')
    })
  })
})