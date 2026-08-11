import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3004;
app.use(express.json());
app.use(cors());

const user = [];

app.get('/', (req, res)=>{
    return res.json(user);
})

app.post('/cadastro', (req, res)=>{
    const {usuario, email, senha} = req.body;

    if (!usuario || !email || !senha) {
        return res.status(400).json({
            erro: "Preencha todos os campos"
        });
    }

    if (senha.length < 6) {
        return res.status(400).json({
            erro: "A senha deve ter 6 caracteres ou mais"
        });
    }

    const emailUsado = user.find((busca) => busca.email === email);

    if (emailUsado) {
        return res.status(409).json({
            erro: "Email já está em uso"
        });
    }

    console.log(`Recebido, aguarde 1 segundo`);

    user.push(usuario, email, senha);

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