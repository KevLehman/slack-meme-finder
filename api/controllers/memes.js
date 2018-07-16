const searchForMeme = (req, res, next) => {
  console.log(req.body);
  res.send(`You asked for ${req.body.text}`);
};

module.exports = {
  searchForMeme,
};
