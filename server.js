const express = require('express');
const app = express();
const PORT = 3000;

app.get('/about', function (req, res) {
	res.send('About Us');
});

app.use(express.static(`${__dirname}/public`));

app.listen(PORT, function () {
	console.log('Express server started!');
});
