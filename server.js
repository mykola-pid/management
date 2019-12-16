const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': '1',
          'image': 'https://placeimg.com/64/64/234',
          'name': 'TUDOL',
          'birthday': '19930315',
          'gender': 'male',
          'job': 'student'
        },
        {
          'id': '2', 
          'image': 'https://placeimg.com/64/64/f',
          'name': 'SIMBA',
          'birthday': '19930104',
          'gender': 'male',
          'job': 'gamer'
        }, 
        {
          'id': '3',
          'image': 'https://placeimg.com/64/64/bgd',
          'name': 'GUEU',
          'birthday': '19930404',
          'gender': 'male',
          'job': 'programmer'
        },
      ]);
    });

app.listen(port, () => console.log(`Listening on port ${port}`));