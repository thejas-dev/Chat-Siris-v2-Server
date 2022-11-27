const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const socket = require('socket.io');
const app = express();
// require('dotenv').config();
const userRoutes = require("./routes/userRoutes")




app.use(cors());
app.use(express.json());

app.use('/api/auth',userRoutes);

mongoose.connect("mongodb+srv://thejashari:letmegoin@cluster0.m2aumyz.mongodb.net/?retryWrites=true&w=majority",{
	useNewUrlParser:true,
	useUnifiedTopology:true,
}).then(()=>{
	console.log("db connected successfully")
}).catch((err)=>{
	console.log(err);
});

let PORT = process.env.PORT || 3333;

app.get('/',(req,res)=>{
	res.send(`<h1>Hello</h1>`)
})

const server = app.listen(PORT,()=>{
	console.log(`Server Started on ${PORT} `);
})s

const io= socket(server,{
	cors:{
		origin:"https://chat-siris-v2.vercel.app",
		methods: ["GET","POST"],
		allowedHeaders:["my-custom-header"],
		credentials:true,
	},
});

global.onlineUsers = new Map();

io.on("connection",(socket)=>{
	global.chatSocket = socket
	socket.on('add-user',(userId)=>{
		onlineUsers.set(userId,socket.id);
	})
	socket.on('add-member',({channelName,members})=>{
		socket.join(channelName);
		io.to(room).emit("userJoined",members)
	})
	socket.on('addUserToChannel',(channelRef)=>{
		socket.join(channelRef.name);
		console.log(channelRef.name)
		io.to(channelRef.name).emit('channelUpdate',channelRef);
	})
	socket.on('RemoveUserFromChannel',(channelRef)=>{
		socket.leave(channelRef.name);
		console.log(channelRef.name)
		io.to(channelRef.name).emit('channelUpdate',channelRef);
	})
	socket.on('refetchChannels',()=>{
		socket.broadcast.emit('fetch')
	})
	socket.on('add-msg',({group,data})=>{
		console.log(data.data.message.text)
		io.to(group).emit('msg-recieve',data);
	})
	socket.on('refetchMessages',({group})=>{
		console.log(group);
		io.to(group).emit('fetchMessages',group);
	})
})





