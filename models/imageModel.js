const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
	link:{
		type:String,
		required:true
	},
	title:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:true
	}},
	{
		timestamps:true,
	}
);

module.exports = mongoose.model("Image",ImageSchema)