var express = require('express');
var app = express();
var io = require('socket.io')();

const port = process.env.PORT || 3030;

// tell express where our static files are (js, images, css etc)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// create server variable for socket.io to use
const server = app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});



io.attach(server);

io.on('connection', function(socket){
    console.log('a user has connected');
    //you have joined the chat session
    socket.emit('connected',{sID:`${socket.id}`,message:'new connection'});
    //tell everyone that you're joined
    io.emit('enter',`${socket.id} has joined the chat`)



//listen for typing
    socket.on('typing',function(msg){
        //console.log('someone is typing a message');
    
        io.emit('typing',{id:`${socket.id}`,message:`${msg.user} is typing....`});


    });



    //listen for an incoming message from anyone connected to the app
     socket.on('chat message',function(msg){
           console.log('message:', msg,'socket:',socket.id);

           //send the msg to everyone connected to the app
           io.emit('chat message',{id:`${socket.id}`,message:msg});
           //io.emit('tweet',{id:`${socket.id}`,message:msg});
     });
     
   socket.on('disconnect',function(){
       console.log('a user has disconnected');
       io.emit('leave',`${socket.id} has left the chat`);
   });

});