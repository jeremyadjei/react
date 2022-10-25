const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 6000;


let products = [];

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/products', (req, res) => {
    const products = req.body;

   
    console.log(products);
    books.push(products);

    res.send('product is added to the database');
});

app.listen(port, () => console.log(`Auction server listening on port ${port}!`));