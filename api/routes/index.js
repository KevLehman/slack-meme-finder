const { meme } = require('../controllers');

module.exports = (app) => {
  app.route('/auth');
  app.route('/meme')
    .post(meme.searchForMeme);
};
