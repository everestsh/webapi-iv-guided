
require('dotenv').config() //npm i dotenv
const server = require('./api/server.js');
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
// node index.js 4000