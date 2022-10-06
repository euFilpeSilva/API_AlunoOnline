var express = require('express');
var router = express.Router();

const boletos = [
    {
        "mensalidade": "01",
        "vencimento": "01/01/2022",
        "valor": "500.00",
        "situacao": "Pago",
    },
    {
        "mensalidade": "02",
        "vencimento": "01/02/2022",
        "valor": "500.00",
        "situacao": "Pago",
    },
    {
        "mensalidade": "03",
        "vencimento": "01/03/2022",
        "valor": "500.00",
        "situacao": "Em Atraso",
    },
];

router.get('/listarBoletos', function(req, res, next) {
  res.send(boletos);
});
module.exports = router;