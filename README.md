# Testes automatizados da Banco API

Projeto de automação de testes de API REST desenvolvido como parte dos estudos de QA na Mentoria de Testes de Software 2.0. Os testes exercitam operações de login e transferências da Banco API e verificam códigos de status e dados retornados.

## Tecnologias utilizadas

- JavaScript com Node.js
- [Mocha](https://mochajs.org/) para organizar e executar os testes
- [Supertest](https://github.com/ladjs/supertest) para enviar requisições HTTP
- [Chai](https://www.chaijs.com/) para as asserções
- [dotenv](https://github.com/motdotla/dotenv) para carregar variáveis de ambiente
- [Mochawesome](https://github.com/adamgruber/mochawesome) para gerar relatórios HTML e JSON

## Estrutura de diretórios

```text
banco-api-tests/
├── fixtures/
│   ├── postLogin.json
│   └── postTransferencias.json
├── helpers/
│   └── autenticacao.js
├── mochawesome-report/       # relatórios gerados ao executar os testes
├── test/
│   ├── login.test.js
│   └── transferencia.test.js
├── .env                      # configuração local; não publicar valores secretos
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Pré-requisitos

- Node.js e npm instalados
- Banco API em execução
- Banco de dados configurado e disponível para a API

## Configuração

Na raiz do projeto, crie um arquivo `.env` com a URL base da API:

```env
BASE_URL=http://localhost:3000
```

Ajuste a URL e a porta caso sua Banco API esteja rodando em outro endereço. O arquivo `.env` contém configuração local e não deve ser compartilhado com valores secretos.

## Instalação e execução

Instale as dependências:

```bash
npm install
```

Com a API em execução, rode todos os testes:

```bash
npm test
```

## Relatórios

Depois da execução dos testes, o Mochawesome salva os relatórios na pasta `mochawesome-report/`. No macOS, abra o relatório HTML com:

```bash
open mochawesome-report/mochawesome.html
```

## Cenários cobertos

- Login e obtenção de token de autenticação.
- Criação de transferência válida.
- Validação de transferência abaixo do valor mínimo.
- Consulta de transferência por ID, com verificações dos dados da resposta.
- Testes de listagem e paginação de transferências, conforme implementados no projeto.

## Documentação da API

- Banco API: [juliodelimas/banco-api](https://github.com/juliodelimas/banco-api)
- Swagger da API local: [http://localhost:3000/api-docs](http://localhost:3000/api-docs) (quando a API estiver rodando localmente)
