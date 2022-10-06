var express = require('express');
var router = express.Router();

const faltas = [
    {
        "periodo": "2021/1",
        "disciplina": { "codigo": "ADS030", "nome": "Manutenção de Software e DevOps" },
        "total": "0",
        "porcentagem": "0",
    },
    {
        "periodo": "2021/1",
        "disciplina": { "codigo": "ADS032", "nome": "Construção de Frontend" },
        "total": "18",
        "porcentagem": "15",
    },

];

router.get('/listarFaltas', function(req, res, next) {
  res.send(faltas);
});

module.exports = router;