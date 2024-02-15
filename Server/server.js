const express = require('express')
const app = express();
const cors = require('cors')
const socket = require('socket.io')
const port = 8000;

app.use(cors());

const server = app.listen(port, () => {
    console.log(`listening on port : ${port}`)
});

const io = socket(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true
    }
})


// event listeners 

/* before creating our own eventListeners we must have an event listener named
'connection'*/

io.on("connection", socket => {
    // call back , also note that each client that connects gets their own id . 
    console.log("Nice to meet you. (shake hand");
    // we add our own event listeners right inside this function

   
        // socket.broadcast.emit("event_to_all_other_clients" , data);
        socket.emit("Welcome");

       
        
})



