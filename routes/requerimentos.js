var express = require('express');
var router = express.Router();

const requerimentos = [
    {
        "disciplina": { "codigo": "ADS030", "nome": "Manutenção de Software e DevOps" },
        "periodo": "2021/1",
        "prova": "A1",
        "situacao": "Deferido",
        "argumentacao": "A questão 1 foi respondida conforme o material da disciplina.",
        "parecer": "A pontuação da questão foi revisada e a nota da prova atualizada."
    },
    {
        "disciplina": { "codigo": "ADS032", "nome": "Construção de Frontend" },
        "periodo": "2021/1",
        "prova": "A2",
        "situacao": "Indeferido",
        "argumentacao": "Favor reconsiderar a questão 2.",
        "parecer": "A resposta dada à questão é referente a outro assunto."
    },
];

router.get('/listarRequerimentos', (req, res) => {
    res.send(requerimentos);
})

module.exports = router;