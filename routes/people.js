const router = require('express').Router();
const { append } = require('express/lib/response');
const connection = require('../connection');

//create a new record...

router.post('/create', (req, res) => {
    let data = { name: req.body.name, location: req.body.location };
    let sql = `INSERT INTO people SET ?`;
    connection.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json({ msg: 'data sent' })
    });


});

//Read all Records...

router.get('/show', (req, res) => {
    const sql = `SELECT  * FROM people`;
    connection.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ result: results })
    })
});

//show Specific Record...

router.get('/show/:id', (req, res) => {
    const _id = req.params.id;
    const sql = `SELECT * FROM people WHERE id=${_id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ data: result })
    })
})

//update a Specific record..

router.put('/show/:id', (req, res) => {
    const _id = req.params.id;
    const sql = `UPDATE people SET name='${req.body.name}',location='${req.body.location}' WHERE id='${_id}'`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ msg: 'successfully edited' })
    })
});


//delete a Specific record....


router.delete('/show/:id', (req, res) => {
    const _id = req.params.id;
    const sql = `DELETE FROM people WHERE id=${_id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ msg: `successfully deleted id ${_id}` })
    })
})










module.exports = router;