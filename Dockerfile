FROM node:16-alpine
# Diretório de trabalho dentro do contêiner
WORKDIR /app
# Copia o arquivo package.json para instalar as dependências
COPY package.json ./

RUN npm install
# Copia o restante do código-fonte
COPY . .
# Expondo a porta
EXPOSE 3001
# Comando para iniciar o backend
CMD ["npm", "start"]