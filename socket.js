const { createServer } = require('http');

const socketIo = require('socket.io');

const server = createServer().listen(3000);

const io = socketIo(server);


io.on('connection', socket => {

    console.log(`${io.engine.clientsCount} connections.`)

    socket.on('chat', msg => {

        console.log("server recive", msg);

        io.sockets.emit('chat-message', msg, socket.id);

    })

    socket.on('disconnect',() => {

        console.log('connection disconnected.')
        
    });


})


console.log('Socket connections.')