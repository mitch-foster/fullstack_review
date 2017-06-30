const   express = require('express'),
        bodyParser = require('body-parser'),

        port = 3333,
        app = express();

app.use(bodyParser.json());

var statuses = [
                {name: 'Billy', status: 'Wow today is boring!'},
                {name: 'Jonas', status: 'I love pizza'},
                {name: 'Barack', status: 'Best vacation ever lol!'},
            ];

app.get('/api/getstatus', (req, res)=>{
    res.status(200).send(statuses)
})

app.post('/api/submitstatus', (req, res) => {
    statuses.push(req.body)
    res.status(200).send(statuses)
})




app.listen(port, console.log(`Server live and listening on port ${port}.`))



