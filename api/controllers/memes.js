const request = require('request-promise');

const searchForMeme = (req, res) => {
  const { text: meme } = req.body;
  const { CSE_ID, CSE_API_KEY } = process.env;

  const url = `https://www.googleapis.com/customsearch/v1?q=meme+${meme}&cx=${CSE_ID}&searchType=image&key=${CSE_API_KEY}`;
  request(url)
    .then((response) => {
      const data = JSON.parse(response);
      const attachments = data.items.reduce((prev, curr) => {
        prev.push({
          fallback: curr.title,
          title: curr.title,
          image_url: curr.link,
        });
        return prev;
      }, []);
      res.send({ text: `I have found this results for *${meme}*`, attachments });
    });
};

module.exports = {
  searchForMeme,
};
