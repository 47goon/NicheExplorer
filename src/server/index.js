const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();

const server = http.createServer(app);
const io = socketIo(server); // < Interesting!

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.redirect('/');
});

io.on('connection', (socket) => {
  console.log(`New client connected: ${socket.id}`);
  socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(8000, () => console.log('HTTP server Listening on port 8000!'));
app.listen(8080, () => console.log('Listening on port 8080!'));
