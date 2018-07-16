const { meme, stack } = require('../controllers');

module.exports = (app) => {
  app.route('/stackoverflow')
    .post(stack.searchQuestion);
  app.route('/meme')
    .post(meme.searchForMeme);
};
