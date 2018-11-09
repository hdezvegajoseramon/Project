var _http = require('http');

_http.createServer(function(_required, _response) {
  _response.writeHead(200, {"Content-Type" : "text/html"});
  _response.write("<h1>Hola Mundo!!</h1>");
  _response.end();
}).listen(80);

console.log('Server is running!!');
