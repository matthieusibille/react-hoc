var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var cors = require('cors');

var components = require('./components.json');
var users      = require('./users.json'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corsOptions = {
	origin: 'http://localhost:4000',
	optionsSuccessStatus: 200,
	credentials: true 
  }
app.use(cors(corsOptions));

var port = process.env.PORT || 3000; 

var router = express.Router();

router.use(function(req, res, next) {
	next();
});

router.get('/', function(req, res) {
	res.send('API OK');	
});

router.route('/components')

	.get(function(req, res) {
		res.json(components);
		});

router.route('/users')

	.get(function(req, res) {
		res.json(users);
		});

app.use('/api', router);

app.listen(port);
console.log('Server running on port ' + port);
