const Person = require('../models/person');
exports.documentation = (req, res) => {
    res.status(200).json([
      {
        path: '/people',
        description: 'Returns an array of 4 people objects. Each object has a unique ID, their name, age, and one other attribute of your choosing'
      },
      {
        path: '/people/:id',
        description: 'Returns a person with the passed ID'
      }
    ]);
  };

  exports.index = async (req, res, next) => {
    try {
        const people = await Person.find();
        res.status(200).json(people);
    } catch (error) {
        next(error);
    }
};

  exports.show = async (req, res, next) => {
    try {
      const person = await Person.findById(req.params.id);
      res.status(200).json(person);
    } catch (error) {
      next(error);
    }
  };