const mongoose = require('mongoose')

const tradityUserModel = new mongoose.Schema({
	gmail:{
		type: String,
		required:true
	},
	name:{
		type:String,
		required:true
	}},
	{
		timestamps:true,
	}
);

module.exports = mongoose.model("tradityUser",tradityUserModel)