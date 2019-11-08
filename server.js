const express = 'express';
const router = require('./posts/postRouter.js');
const helmet = require('helmet');
const morganLogger = require('morgan');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morganLogger('dev'));
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} Request`);
};


function validateUser(req, res, next){
  
}
module.exports = server;
