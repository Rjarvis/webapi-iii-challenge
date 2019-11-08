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
                req.user = hub;
                next();
            } else {
                res.status(400).json({message: `${id} could not be found! `+"invalid user id"});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: 'exception', err });
        });
};

function validateUser(req, res, next) {
    const { body } = req.params;
    Hubs.get()
        .then(hub => {
            if(body.name && body){
                next();
            }else{
                if(!body.name && body){
                    res.status(400).json({message: `${body.name} is read as blank or undefined.  Missing required name field.`});
                }else{
                    res.status(400).json({message: `${body} is undefined or missing post data.`});
                }            
            }
        }).catch(err =>{
            console.log(err);
            res.status(500).json({message: 'exception', err });
        });
};

function validatePost(req, res, next) {
    const { body } = req.params;
    Hubs.get
};

module.exports = router;
