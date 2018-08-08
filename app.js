const express 	= require('express');
const app 		= express();

const routes 	= require('./routes');


/* App Setup
****************/

app.set('view engine', 'pug');


/* Routes
****************/

app.use(routes);


/* Server
****************/

app.listen(3000, () => {
	console.log('App listening on port 3000');
});