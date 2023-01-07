const bodyParserPackege = require('body-parser');
function bodyParser(app){

app.use(bodyParserPackege.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParserPackege.json());
}

module.exports = bodyParser;
