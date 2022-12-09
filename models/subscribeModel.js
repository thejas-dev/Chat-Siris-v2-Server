const mongoose = require('mongoose')

const subscribeSchema = new mongoose.Schema({
	gmail:{
		type: String,
		required:true
	}},
	{
		timestamps:true,
	}
);

module.exports = mongoose.model("Subscribe",subscribeSchema)