const express = require('express');

const app = express();

const server = app.listen(8000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.set('view engine', 'pug');

// serve static files from folder "public"
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'FCoder | Homepage',
    });
});
