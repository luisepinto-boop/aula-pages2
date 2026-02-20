const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/enviar", (req, res) => {
    const { nome, email, mensagem } = req.body;

    console.log("Novo contato:");
    console.log(nome, email, mensagem);

    res.send("<h2>Mensagem enviada com sucesso!</h2><a href='/'>Voltar</a>");
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});