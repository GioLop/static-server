const { createServer } = require('node:http');

const httpListener = require('./listeners/http.listener');

const PORT = 8000;

const server = createServer(httpListener);
server.listen(PORT);

console.log(`Server listening on PORT: ${PORT}`);