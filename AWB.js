//Enables Autowoot
API.on(API.DJ_ADVANCE,autoWoot);function autoWoot(){$('.button')[1].click();}$('.button')[1].click()
//Sends Chat Message about autowoot
API.chatLog('Thank you for using SuperW00T Version 1.0.0!')
//AutoJoin Message
API.chatLog('Type /aj to begin AutoJoining the waitlist!')
//Grab Message
API.chatLog('Type /grab to curate the current song!')
//AutoQueue documentation by Shard
function joinCommandCalled(e){if(e=="/aj"){API.chatLog("AutoJoin confirmed");var t=API.getTimeRemaining();setTimeout(function(){var e=setInterval(function(){API.djJoin();if(API.getWaitListPosition(user)>-1||API.getTimeRemaining()>1){user=null;clearInterval(e);console.log("join failed or successful")}},40)},t*1e3-800);API.on(API.WAIT_LIST_UPDATE,n);function n(){var e=API.getWaitList().length;if(e<50){API.djJoin()}}}}API.on(API.CHAT_COMMAND,joinCommandCalled)
//GrabIT
if(e=="/grab") return API.on(API.DJ_ADVANCE,Grab);function Grab(){$('.button')[2].click();}$('.button')[2].click()
if(e=="/grab") return data.value < 2 ? Audience.strobeMode(data.value === 1) : Audience.lightsOut(true);


