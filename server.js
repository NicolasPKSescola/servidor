import express from 'express';

const app = express();
app.use(express.json())
const PORT = 3000;

const users=[];

app.post('/cadastro', (req, res)=>{
    const usuario = req.body.usuario;
    const email = req.body.email;

    if (usuario && email) {
        const novoUsuario = {usuario, email};
        
        users.push(novoUsuario);

        console.log(`Cadastrado o ${usuario}`);

        res.json({
            mensagem: "Cadastrado com Sucesso!!",
            perfil: `Perfil ${usuario} cadastrado com o email ${email}`
        });
    }
});

app.get('/', (req, res)=>{
    res.json(users);
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});