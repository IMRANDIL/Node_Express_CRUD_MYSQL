const router = require('express').Router();
const connection = require('../connection');

//create a new record...

router.post('/create', (req, res) => {
    let data = { name: req.body.name, location: req.body.location };
    let sql = `INSERT INTO people SET ?`;
    connection.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json({ msg: 'data sent' })
    });


})












module.exports = router;