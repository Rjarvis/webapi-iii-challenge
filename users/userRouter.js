const express = 'express';
const Hubs = require('./userDb.js');
const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {
    res.status(200).json(req);

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    const { id } = req.params;
    Hubs.getById(id)
        .then(hub => {
            if(hub){
                req.hub = hub;
                next();
            } else {
                next(new Error('does not exist'));
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: 'exception', err });
        });
};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
