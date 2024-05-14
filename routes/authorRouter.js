const express = require('express');
const bodyParser = require('body-parser');

const authorRouter = express.Router();

authorRouter.use(bodyParser.json());

authorRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the author to you!');
})
.post((req, res, next) => {
    res.end('Will add the author:' +req.body.name +req.body.birthYear+req.body.country);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /author');
})
.delete((req, res, next) => {
    res.end('Deleting all author');
});
authorRouter.route('/:id')
	.get( (req,res,next) => {
    	    res.end('Will send details of the author: ' + req.params.id +' to you!');
    	})
    	
    .post( (req, res, next) => {
      res.statusCode = 403;
      res.end('POST operation not supported on /dishes/'+ req.params.id);
    })
    
    .put((req, res, next) => {
      res.write('Updating the author: ' + req.params.id + '\n');
      res.end('Will update the author: ' + req.body.id + 
            ' with details: ' + req.body.name + req.body.birthYear + req.body.country);
    })
    
    .delete( (req, res, next) => {
        res.end('Deleting author: ' + req.params.id);
    })
    
    
    

module.exports = authorRouter;
