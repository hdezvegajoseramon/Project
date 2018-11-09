

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
const port = 8080;

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

const connections = [];
io.sockets.on('connection', (socket) => {
   connections.push(socket);
   console.log(' %s sockets is connected', connections.length);

   socket.on('disconnect', () => {
      connections.splice(connections.indexOf(socket), 1);
   });

   socket.on('sending message', (message) => {
      console.log('Message is received :', message);

      io.sockets.emit('new message', { message: message });
   });
});

http.listen(port, function() {
  console.log('Server running, listening on *:' + port);
});
