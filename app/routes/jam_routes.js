var ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

  app.get('/jam', (req, res) => {
    db.collection('jam', (err, collection) => {
      collection.find().toArray((err,items) => {
        res.send(items)
      });
    });
  })

  app.get('/jam/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('jam').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(item);
      }
    });
  });

  app.post('/jam', (req, res) => {
    const jam = { jam: req.body.jam, msrp: req.body.msrp };
    db.collection('jam').insert(jam, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.delete('/jam/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('jam').remove(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send('Jam ' + id + ' deleted!');
      }
    });
  });

  app.put('/jam/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const jam = { jam: req.body.jam, msrp: req.body.msrp };
    db.collection('jam').update(details, jam, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(jam);
      }
    });
  });
};