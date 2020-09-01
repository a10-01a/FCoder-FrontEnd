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

app.get('/profile', (req, res) => {
    var userName = req.query.name;
    res.render('profile', {
        title : userName + " | FCoder",
        name : userName,
    });
});

app.get('/login', (req, res) => {
    res.render('login', {
        title: "FCoder | Login",
    })
});

app.get('/resgister', (req, res) => {
    res.render('register', {
        title: "FCoder | Register",
    })
});

