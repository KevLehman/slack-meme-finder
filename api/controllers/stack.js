const request = require('request-promise');

const searchQuestion = (req, res) => {
  const { text: question } = req.body;
  request(`https://stackoverflow.com/search?q=${question}`)
    .then((response) => {
      console.log(response);
      res.send('OK');
    })
};

module.exports = {
  searchQuestion,
};
