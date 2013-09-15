//Enables Autowoot
API.on(API.DJ_ADVANCE,autoWoot);function autoWoot(){$('.button')[2].click();}$('.button')[2].click()
//Sends Chat Message about autowoot
API.chatLog('Thank you for using SuperW00T Version 1.0.0!')
//Sends Chat Message about updates coming soon
API.chatLog('More Updates coming soon!')
//AutoQueue documentation
javascript:API.on(API.WAIT_LIST_UPDATE, callback);function callback(){var waitingCount = API.getWaitList().length;if (waitingCount<50){API.djJoin();}}

