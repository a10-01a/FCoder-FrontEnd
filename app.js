const express = require('express');
const ejs = require('ejs');
const app = express();

const server = app.listen(8000, () => {
    console.log(`Express running @ PORT ${server.address().port}`);
});

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/home', {
        title :"Homepage | FCoder",
    });
});

app.get('/profile', (req, res) => {
    name = req.query.name

    if (name == undefined){
        name = "Noname";
    }
    
    // query to db here
    res.render('pages/profile', {
        title : name + " | FCoder",
        name : name,
    });
});

app.get('/posts/:id', (req, res) => {
    id = req.params['id'];
    res.render('pages/posts',{
        title : "Some posts title " + id,
        content : "Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here Some content here ",

    })
});