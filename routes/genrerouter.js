const express = require('express');
const bodyParser = require('body-parser');

const genreRouter = express.Router();

genreRouter.use(bodyParser.json());

genreRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the genre to you!');
})
.post((req, res, next) => {
    res.end('Will add the genre:' +req.body.id + req.body.name);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all Book');
});
genreRouter.route('/:id')
	.get( (req,res,next) => {
    	    res.end('Will send details of the genre: ' + req.params.id +' to you!');
    	})
    	
    .post( (req, res, next) => {
      res.statusCode = 403;
      res.end('POST operation not supported on /genre/'+ req.params.id);
    })
    
    .put((req, res, next) => {
      res.write('Updating the genre: ' + req.params.id + '\n');
      res.end('Will update the genre: ' + req.body.id + 
            ' with name: ' + req.body.name );
    })
    
    .delete( (req, res, next) => {
        res.end('Deleting book: ' + req.params.id);
    })
    genreRouter.route('/:genresId')
	.get( (req,res,next) => {
    	    res.end('Will send details of the genre: ' + req.params.id +' to you!');
    	})
    	
    .post( (req, res, next) => {
      res.statusCode = 403;
      res.end('POST operation not supported on /genre/'+ req.params.id);
    })
    
    .put((req, res, next) => {
      res.write('Updating the dish: ' + req.params.id + '\n');
      res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
    })
    
    .delete( (req, res, next) => {
        res.end('Deleting dish: ' + req.params.Bookid);
    })
    
    

module.exports = genreRouter;
