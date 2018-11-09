
/*var _app = require('express')(),
    _http = require('http').Server(_app),
    _io = require('socket.io')(_http);

_app.get('/', function(_require, _response) {
  _response.sendFile(__dirname + '/index.html');
  console.log('File loaded!!!');
});

_io.on('connection', function(_socket){
  console.log('a user connected');
});

_http.listen(3000, function() {
  console.log('Server is running');
});*/

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log('File loaded!!!');
});

io.sockets.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg);
  })
});

http.listen(port, () => {
  console.log('Server connected, listening on *:' + port);
});


/*window.onload = function() {
  var _form = document.getElementById('form');
  if(_form.attachEvent) {
    _form.attachEvent('submit', onSubmit)
  } else {
    _form.addEventListener('submit', onSubmit);
  }
}

function onSubmit(_event) {
    if (_event.preventDefault) {
      _event.preventDefault();
    }

    var _message = document.getElementById('message');
    console.log('Send: ' + _message.value);

    var _socket = io();
    _socket.emit('chat message', _message.value);

    _message.value = '';

    _socket.on('chat message', function(_msg) {
      console.log('Recive: ' + _msg);
    })

    // You must return false to prevent the default form behavior
    return false;
}*/
