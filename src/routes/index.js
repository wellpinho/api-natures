const { Router } = require('express');
const routes = Router();

routes.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome',
    app: 'Natures Rest API'
  });
});

routes.get('/:id', (req, res) => {
  const {id} = req.params;

  return res.status(200).json({
    id: id
  });
});

routes.post('/', (req, res) => {
  const { name, age }= req.body;

  return res.status(200).json({
    name: name,
    age: age
  });
});

routes.put('/:id', (req, res) => {
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

routes.delete('/:id', (req, res) => {
  const { id } = req.params;
  const { name, age }= req.body;

  if (!id) {
    return res.status(400).send('Error');
  }

  return res.status(200).json('Deleted')
});

module.exports = routes;
