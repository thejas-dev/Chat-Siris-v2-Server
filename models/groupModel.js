const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
	name:{
		type: String,
		min:3,
		max:20,
	},
	admin:{
		type:String,
		required:true
	},
	adminId:{
		type:String,
		required:true
	},
	description:{
		type:String,
	},
	privacy:Boolean,
	users:Array,	
	},
	{
		timestamps:true,
	}
);

module.exports = mongoose.model("Groups",groupSchema)