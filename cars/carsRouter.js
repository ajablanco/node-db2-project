const express = require('express');
const knex = require('knex'); // npm i -g knex

const knexfile = require('../knexfile.js')


//configures connection to database
const db = knex(knexfile.development);

const router = express.Router();

//READ
router.get('/', (req, res) => {
  db('cars')
  .then(cars => {
    res.json(cars); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve cars' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars').where({ id }).first()
  .then(car => {
    res.json(car);
  }) 
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve car' });
  });
});


//CREATE
router.post('/', (req, res) => {
  const carData = req.body;
  db('cars').insert(carData)
  .then(ids => {
    db('cars').where({ id: ids[0] })
    .then(newCarEntry => {
      res.status(201).json(newCarEntry);
    });
  })
  .catch (err => {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data" });
  });
});


//UPDATE POSTS

router.put("/:id", (req, res) => {
    const {id}= req.params
    const changes= req.body

    db('cars')
    .where({id})
    .update(changes)
    .then(count => {
        if(count) {
            res.json({updated:count})
        } else {
            res.status(200).json(count)
        }
    })
    .catch(err => {
        res.status(500).json({message: "err", err})
    })
})

//DELETE 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('cars')
    .where({id})
    .del({id})
    .then(deleted => {
            res.status(200).json(deleted)
    })
    .catch(err => {
        res.status(500).json({message: "could not delete"})
    });
});


module.exports = router;