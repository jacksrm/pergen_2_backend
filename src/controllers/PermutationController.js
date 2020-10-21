const pergen = require('../utils/pergen');

module.exports = {
  async index(req, res) {
    const { pergenEntry } = req.body;


    
    try {
      let permutations = await pergen(pergenEntry);

      return res.json(permutations);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}