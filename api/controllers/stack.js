const jsdom = require('jsdom');
const stripHtmlTags = require('../helpers/html');
const { JSDOM } = jsdom;

const searchQuestion = (req, res) => {
  const { text: question } = req.body;
  JSDOM.fromURL(`https://stackoverflow.com/search?q=${question}`)
    .then((response) => {
      const responses = Array.from(response.window.document.getElementsByClassName('question-summary search-result'));
      const attachments = responses.reduce((prev, curr) => {
        const qLink = curr.childNodes[3].childNodes[1].querySelectorAll('a')[0].href;
        const title = curr.childNodes[3].childNodes[1].querySelectorAll('a')[0].innerHTML;
        const plot = stripHtmlTags(curr.childNodes[3].childNodes[3].innerHTML);

        const info = {
          title,
          title_link: qLink,
          text: plot,
        };
        prev.push(info);
        return prev;
      }, []);
      res.send({ text: `These are the 15 first questions of *${question}*`, attachments });
    })
};

module.exports = {
  searchQuestion,
};
