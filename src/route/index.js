const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        Signo: "Seu signo",
        Data: "25.09.2020"
    })
});

module.exports = router; 