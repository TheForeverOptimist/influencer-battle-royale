const express = require('express');
const path = require('path')
const { nextTick } = require('process');
const methodOverride = require('method-override');

const app = express();
const influencerController = require('./controllers/influencers')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(methodOverride('_method'))
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

app.get('/', (req,res) => {
    res.render('home.ejs');
})


app.use('/influencers', influencerController);
// app.get('/influencers', (req,res) => {
//     res.render('influencers.ejs');
// })
app.get('/*', (req,res) => {
    res.render('404.ejs');
})



app.listen(4000, () => {
    console.log('Listening on Port 4000');
})