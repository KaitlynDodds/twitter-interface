const express = require('express');
const app = express();


/* App Setup
****************/

app.set('view engine', 'pug');


/* Routes
****************/

app.get('/', (req, res) => {
	res.render('index');
});


/* Server
****************/

app.listen(3000, () => {
	console.log('App listening on port 3000');
});