const http = require('http');
const app = require('../app');

const port = 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.on('listening', () => console.log('Server running on port: ', port));
