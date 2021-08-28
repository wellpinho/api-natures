const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome',
    app: 'Natures Rest API'
  });
});

app.get('/:id', (req, res) => {
  const {id} = req.params;

  return res.status(200).json({
    id: id
  });
});

app.post('/', (req, res) => {
  const { name, age }= req.body;

  return res.status(200).json({
    name: name,
    age: age
  });
});

app.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, age }= req.body;

  if (!id) {
    return res.status(400).send('Error');
  }

  return res.status(200).json({
    name: name,
    age: age
  })
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  const { name, age }= req.body;

  if (!id) {
    return res.status(400).send('Error');
  }

  return res.status(200).json('Deleted')
});

app.listen(4000, () => console.log('running'));
