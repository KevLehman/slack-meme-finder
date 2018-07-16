require('dotenv').config();

const app = require('./app');

const { PORT } = process.env;

app.listen(PORT, () => {
  console.clear();
  console.log(`app listening in ${PORT}`);
});
