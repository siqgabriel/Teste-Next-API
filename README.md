# API Test Repository - Next.js & TypeScript

Este repositório é um projeto de exemplo para testar APIs usando Next.js com TypeScript. Ele inclui endpoints de API, exemplos de uso e como rodar o projeto localmente para realizar testes de integração e desenvolvimento de APIs.

## Tecnologias Utilizadas

- **Next.js** - Framework React para renderização no lado do servidor e geração estática.
- **TypeScript** - Tipagem estática para JavaScript, melhorando a segurança e a escalabilidade do código.
- **API Routes** - Endpoints de API simples, utilizando os recursos do Next.js.
- **Axios** - Cliente HTTP para fazer requisições aos endpoints.

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) >= 14.x
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

Instale as dependências:

bash
Copiar código
cd nome-do-repositorio
npm install
# ou
yarn install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm run dev
# ou
yarn dev
O servidor estará rodando em http://localhost:3000.

Estrutura do Projeto
bash
Copiar código
.
├── pages
│   ├── api
│   │   └── exemplo.ts # Exemplo de rota API
├── public
├── styles
├── tsconfig.json
├── package.json
└── README.md
pages/api/: Contém os endpoints da API.
tsconfig.json: Configurações do TypeScript.
public/: Arquivos estáticos.
styles/: Estilos globais.
Como Usar
Testando um Endpoint
Você pode fazer uma requisição GET para o endpoint de exemplo:

bash
Copiar código
GET /api/exemplo
Exemplo com Axios
No frontend, você pode usar Axios para consumir a API:

typescript
Copiar código
import axios from 'axios';

const fetchData = async () => {
  const response = await axios.get('/api/exemplo');
  console.log(response.data);
};
Contribuição
Contribuições são bem-vindas! Se você quiser melhorar algo, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

yaml
Copiar código

---

Este README já está formatado para markdown. Você pode adaptá-lo conforme necessário.
