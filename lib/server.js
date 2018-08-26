const express = require('express');
const config = require('./config')
import serverRender from './serverRender';
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const initialContent = serverRender();
    res.render('index', { initialContent});
})

app.listen(config.port, function listenHandler() {
    console.info(`running on ${config.port}...`);
});