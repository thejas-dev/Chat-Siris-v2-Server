const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
	group:{
		type:String,
		required:true,
	},
	message:{
		text:{
			type:String,
			required:true,
		},
	},
	byUserName:{
		type:String,
		required:true,
	},
	byUserImage:{
		type:String,
		required:true,
	},
	},
	{
		timestamps:true,
	}
);

module.exports = mongoose.model("Messages",messageSchema)