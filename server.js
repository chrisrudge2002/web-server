const express = require('express');
const middleware = require('./middleware.js');
const app = express();
const PORT = 3000;

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(`${__dirname}/public`));

app.listen(PORT, function () {
	console.log(`Express server started ${PORT}!`);
});
