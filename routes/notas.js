var express = require('express');
var router = express.Router();


const notas = [
    {
        "periodo": "2021/1",
        "disciplina": { "codigo": "ADS030", "nome": "Manutenção de Software e DevOps" },
        "a1": "5.2",
        "a2": "3.8",
        "a3": "4.8",
        "media": "5.0",
    },
    {
        "periodo": "2021/1",
        "disciplina": { "codigo": "ADS032", "nome": "Construção de Frontend" },
        "a1": "6.4",
        "a2": "4.6",
        "a3": "",
        "media": "5.3",
    },
    {
        "periodo": "2021/2",
        "disciplina": { "codigo": "ADS038", "nome": " Governança de TI" },
        "a1": "1.5",
        "a2": "6.5",
        "a3": "2.0",
        "media": "4.7",
    },
];


/* GET users listing. */
router.get('/listarNotas', function(req, res, next) {
  res.send(notas);
});



module.exports = router;
