import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3004;
app.use(express.json());
app.use(cors());

app.post('/cadastro', (req, res)=>{
    const {usuario, email} = req.body;

    if (!usuario || !email) {
        res.status(400).json({
            erro: "Preencha todos os campos"
        });
    }

    console.log(`Recebido, aguarde 1 segundo`);

    setTimeout(()=>{
        console.log(`Cadastrado o ${usuario}`);

        res.json({
            mensagem: "Cadastrado com Sucesso!!",
            perfil: `Perfil ${usuario} cadastrado com o email ${email}`
        });
    }, 1000);
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});