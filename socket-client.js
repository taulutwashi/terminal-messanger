const client = require('socket.io-client');

const io = client('http://localhost:3000')


io.on('connect', () => {
    console.log('client connect.')
});

io.on('chat-message', (msg, id) => {
    console.log(`${id}: ${msg}`);
})

process.stdin.on('data', data => {
    io.emit('chat', data.toString().trim())
})