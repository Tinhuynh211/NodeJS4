const express = require('express');
const bodyParser = require('body-parser');

const bookRouter = express.Router();

bookRouter.use(bodyParser.json());

bookRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the book to you!');
})
.post((req, res, next) => {
    res.end('Will add the Book:' +'isbn :' + req.body.isbn +'title :' + req.body.title +'Subtitle :'+ req.body.subTitle+'date :'+ req.body.publish_date+'publisher :'+ req.body.publisher+'pages :'+ req.body.pages +'des :'+ req.body.description+'web :' +req.body.website);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /book');
})
.delete((req, res, next) => {
    res.end('Deleting all Book');
});
bookRouter.route('/:Bookid')
	.get( (req,res,next) => {
    	    res.end('Will send details of the Book: ' + req.params.Bookid +' to you!');
    	})
    	
    .post( (req, res, next) => {
      res.statusCode = 403;
      res.end('POST operation not supported on /book'+ req.params.Bookid);
    })
    
    .put((req, res, next) => {
      res.write('Updating the Book: ' + req.params.Bookid + '\n');
      res.end('Will update the Book: ' + req.body.isbn + 
            ' with details: ' + req.body.description);
    })
    
    .delete( (req, res, next) => {
        res.end('Deleting book: ' + req.params.Bookid);
    })
    bookRouter.route('/:genresId')
	.get( (req,res,next) => {
    	    res.end('Will send details of the book: ' + req.params.Bookid +' to you!');
    	})
    	
    .post( (req, res, next) => {
      res.statusCode = 403;
      res.end('POST operation not supported on /dishes/'+ req.params.Bookid);
    })
    
    .put((req, res, next) => {
      res.write('Updating the dish: ' + req.params.Bookid + '\n');
      res.end('Will update the dish: ' + req.body.isbn + 
            ' with details: ' + req.body.title);
    })
    
    .delete( (req, res, next) => {
        res.end('Deleting dish: ' + req.params.Bookid);
    })
    
    

module.exports = bookRouter;
