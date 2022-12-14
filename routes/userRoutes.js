const {login,register,createChannel,channelAdminUpdate,tradity,subscribe,tradityusercreate,
	getAllChannels,sendMessage,getMessages,addUserToChannel,tradityusercheck,addtradityimage,removetradityimage,
	addChannelToUser,fetchUserRoom,updateUser,backgroundImage,gettradityimage,
	updateName,updateAvatar,findChannelRoute,deleteMessage} = require('../controllers/userControllers')

const router = require('express').Router();


// router.post('/delete/:id',deleteAvatar);
// router.post('/setchat/:id',setRecentChat);
// router.post('/changebackground/:id',changeBackground);
// router.post('/deletebackground/:id',deleteBackground)
router.post('/login',login);
router.post('/register',register)
router.post('/createChannel',createChannel)
router.get('/getAllChannels',getAllChannels);
router.post('/sendMessage',sendMessage);
router.post('/getMessages',getMessages);
router.post('/addUserToChannel/:id',addUserToChannel);
router.post('/addChannelToUser/:id',addChannelToUser);
router.post('/updateUser/:id',updateUser);
router.post('/fetchUserRoom',fetchUserRoom);
router.post('/deleteBackground/:id',backgroundImage);
router.post('/updateName/:id',updateName);
router.post('/updateAvatar/:id',updateAvatar);
router.post('/findChannelRoute',findChannelRoute);
router.post('/deleteMessage',deleteMessage);
router.post('/channelAdminUpdate/:id',channelAdminUpdate);
router.get('/tradity',tradity)
router.post('/subscribe',subscribe)
router.post('/tradityusercheck',tradityusercheck);
router.post('/tradityusercreate',tradityusercreate);
router.post('/addtradityimage',addtradityimage);
router.post('/removetradityimage',removetradityimage);
router.get('/gettradityimage',gettradityimage);
// router.post('/changeName/:id',changeName);
// router.post('/setavatar/:id',setAvatar)
// router.get("/allUsers/:id/:recentChats",getAllUsers);
// router.get("/searchUsers/:id/:username",searchAllUsers);

module.exports = router;