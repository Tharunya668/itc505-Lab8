const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/cs212/lab/7', (req, res) => {
    const noun = req.body.noun;
    const adjective = req.body.adjective;
    const verb = req.body.verb;
    const pluralNoun = req.body.pluralNoun;
    const color = req.body.color;
    const adverb = req.body.adverb;
    const bodyPart = req.body.bodyPart;
    const emotion = req.body.emotion;
    const animal = req.body.animal;
    const food = req.body.food;

    const madLib = `The ${adjective} ${noun} ${verb} over the ${color} ${pluralNoun}. They were ${adverb} ${emotion} when they saw a ${animal} with a ${bodyPart} eating ${food}.`; 
    res.send(madLib);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
