const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
// Middleware para parsear JSON
app.use(express.json());
// Conectar ao MongoDB
mongoose.connect('mongodb://mongo:27017/meuBanco', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
console.log('Conectado ao MongoDB');
})
.catch((err) => {
console.error('Erro ao conectar ao MongoDB', err);
});
// Definindo um modelo simples
const Item = mongoose.model('Item', { name: String });
// Endpoint para adicionar um item no banco
app.post('/api', async (req, res) => {
const { name } = req.body;
const item = new Item({ name });
await item.save();
res.status(201).json({ message: 'Item adicionado', item });
});
// Endpoint para listar itens
app.get('/api', async (req, res) => {
const items = await Item.find();
res.json(items);
});
// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});