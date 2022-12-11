const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
	link:{
		type:String,
		required:true
	},
	title:{
		type:String
	},
	description:{
		type:String
	}},
	{
		timestamps:true,
	}
);

module.exports = mongoose.model("Image",ImageSchema)