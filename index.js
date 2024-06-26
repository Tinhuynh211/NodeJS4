	const express = require('express');
	const    http = require('http');
	const hostname = 'localhost';
	const port = 3000;
	const app = express();
  const morgan = require('morgan');
  const bodyParser = require('body-parser');
  const bookRouter = require('./routes/bookRouter');
  const genreRouter = require('./routes/genrerouter');
  const authorRouter = require('./routes/authorRouter');
  
  
	
	
	app.use('/book',bookRouter);
	app.use('/genre',genreRouter);
	app.use('/author',authorRouter);
	app.use((req, res, next) => {
	  console.log(req.headers);
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/html');
	  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
	
	});
  app.use(morgan('dev'));
	
	app.use(express.static(__dirname + '/public'));

	
	const server = http.createServer(app);
	
	server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);	});
