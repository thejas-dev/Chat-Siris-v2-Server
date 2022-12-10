const User = require("../models/userModel");
const Group = require('../models/groupModel');
const Message = require('../models/messageModel')
const Subscribe = require('../models/subscribeModel')
const TradityUser = require('../models/tradityUserModel');

module.exports.login = async(req,res,next)=>{
	try{
		const{email} = req.body;
		const user = await User.findOne({email})
		if(!user){
			return res.json({msg:"Account need to be Regitered",status:false});			
		}
		return res.json({status:true, user})
	}catch(ex){
		next(ex)
	}
}

module.exports.register = async(req,res,next)=>{
	try{
		const {username,email,avatarImage,isAvatarImageSet} = req.body;
		const user = await User.create({
			email,username,avatarImage,isAvatarImageSet
		})
		// console.log(user)
		return res.json({status:true,user})
	}catch(ex){
		next(ex);
	}
}

module.exports.createChannel = async(req,res,next) => {
	try{
		const {name,admin,adminId,description,password,adminOnly,users,privacy} = req.body;
		const group = await Group.create({
			name,admin,adminId,description,password,adminOnly,users,privacy
		})
		// console.log(group)
		return res.json({status:true,group})
	}catch(ex){
		next(ex);
	}
}

module.exports.getAllChannels = async(req,res,next) => {
	try{	
		const data = await Group.find({privacy:false});
		return res.json({status:true,data});
	}catch(ex){
		next(ex)
	}
}

module.exports.sendMessage = async(req,res,next) => {
	try{
		const {group,message,byUserName,byUserImage} = req.body;
		const data  = await Message.create({
			message:{text:message},
			group,
			byUserName,
			byUserImage
		})
		return res.json({status:true,data})

	}catch(ex){
		next(ex)
	}
}

module.exports.getMessages = async(req,res,next) => {
	try{
		const {group} = req.body;
		console.log(group)
		const data = await Message.find({ group:{ $all:group } }).sort({updatedAt:1})

		return res.json({status:true,data})
	}catch(ex){
		next(ex)
	}
}


module.exports.addUserToChannel = async(req,res,next) => {
	try{
		const {users} = req.body;
		const userId = req.params.id;
		const data = Group.findByIdAndUpdate(userId,{
			users
		},{new:true},(err,obj)=>{
			return res.json({status:true,obj})
		})
		// return res.json({status:true,data})
	}catch(ex){
		next(ex)
	}
}

module.exports.addChannelToUser = async(req,res,next) => {
	try{	
		const userId = req.params.id;
		const {inChannel} = req.body;
		const data = User.findByIdAndUpdate(userId,{
			inChannel,
		},{new:true},(err,obj)=>{
			return res.json({status:true,obj})
		})
		// return res.json({status:true,data})
	}catch(ex){
		next(ex)
	}
}

module.exports.fetchUserRoom = async(req,res,next) => {
	try{
		const {name} = req.body;
		const data = await Group.findOne({name})
		if(data){
			return res.json({status:true,data})
		}
		return res.json({status:false,data})
	}catch(ex){
		next(ex)
	}
}

module.exports.updateUser = async(req,res,next) => {
	try{	
		const userId = req.params.id;
		const {inChannel,admin} = req.body;
		const data = User.findByIdAndUpdate(userId,{
			inChannel,admin
		},{new:true},(err,obj)=>{
			return res.json({status:true,obj})
		})
		// return res.json({status:true,data})
	}catch(ex){
		next(ex)
	}
}

module.exports.backgroundImage = async(req,res,next) => {
	try{	
		const userId = req.params.id;
		const {backgroundImage} = req.body;
		const data = User.findByIdAndUpdate(userId,{
			backgroundImage
		},{new:true},(err,obj)=>{
			return res.json({status:true,obj})
		})
		// return res.json({status:true,data})
	}catch(ex){
		next(ex)
	}
}

module.exports.updateName = async(req,res,next) => {
	try{	
		const userId = req.params.id;
		const {username} = req.body;
		const data = User.findByIdAndUpdate(userId,{
			username
		},{new:true},(err,obj)=>{
			return res.json({status:true,obj})
		})
		// return res.json({status:true,data})
	}catch(ex){
		next(ex)
	}
}

module.exports.updateAvatar = async(req,res,next) => {
	try{
		const userId = req.params.id;
		const {avatarImage} = req.body;
		const data = User.findByIdAndUpdate(userId,{
			avatarImage
		},{new:true},(err,obj)=>{
			return res.json({status:true,obj})
		})
	}catch(ex){
		next(ex)
	}
}


module.exports.findChannelRoute = async(req,res,next) => {
	try{
		const {name} = req.body;
		const data = await Group.find({ name:{ $all:name },privacy:true }).sort({updatedAt:1}) 
		return res.json({status:true,data})
	}catch(ex){
		next(ex)
	}
}

module.exports.deleteMessage = async(req,res,next) => {
	try{
		const {id} = req.body;
		const data = await Message.deleteOne({_id:id});
		return res.json({status:true,data});
	}catch(ex){
		next(ex);
	}
}

module.exports.channelAdminUpdate = async(req,res,next) => {
	try{
		const {adminOnly} = req.body;
		const userId = req.params.id;
		const data = Group.findByIdAndUpdate(userId,{
			adminOnly
		},{new:true},(err,obj)=>{
			return res.json({status:true,obj})
		})
	}catch(ex){
		next(ex);
	}
}

module.exports.tradity = async(req,res,next) => {
	try{
		const group = 'tradityImg';
		const data = await Message.find({ group:{ $all:group } }).sort({updatedAt:1})

		return res.json({status:true,data})
	}catch(ex){
		next(ex)
	}
}


module.exports.subscribe = async(req,res,next) => {
	try{
		const {gmail} = req.body;
		const subscribe = await Subscribe.create({
			gmail
		})
		return res.json({status:true,subscribe})
	}catch(ex){
		next(ex)
	}
}

module.exports.tradityusercheck = async(req,res,next)=>{
	try{
		const{gmail} = req.body;
		const user = await TradityUser.findOne({gmail})
		if(!user){
			return res.json({msg:"Account need to be Regitered",status:false});			
		}
		return res.json({status:true, user})
	}catch(ex){
		next(ex)
	}
}

module.exports.tradityusercreate = async(req,res,next) => {
	try{
		const {gmail,name} = req.body;
		const user = await TradityUser.create({
			gmail,name
		})
		return res.json({status:true,user})
	}catch(ex){
		next(ex)
	}
}