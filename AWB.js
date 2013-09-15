//Enables Autowoot
API.on(API.DJ_ADVANCE,autoWoot);function autoWoot(){$('.button')[2].click();}$('.button')[2].click()
//Sends Chat Message about autowoot
API.chatLog('Thank you for using SuperW00T Version 1.0.0!')
//AutoJoin Message
API.chatLog('Type /aj to begin AutoJoining the waitlist!')
//AutoQueue documentation by Shard
function joinCommandCalled(e){if(e=="/aj"){API.chatLog("AutoJoin confirmed");var t=API.getTimeRemaining();setTimeout(function(){var e=setInterval(function(){API.djJoin();if(API.getWaitListPosition(user)>-1||API.getTimeRemaining()>1){user=null;clearInterval(e);console.log("join failed or successful")}},40)},t*1e3-800);API.on(API.WAIT_LIST_UPDATE,n);function n(){var e=API.getWaitList().length;if(e<50){API.djJoin()}}}}API.on(API.CHAT_COMMAND,joinCommandCalled)
//Strobe Script
if (strobeScript!== undefined)
    strobeScript.close();
String.prototype.equalsIgnoreCase = function(other) {
    return this.toLowerCase() === other.toLowerCase();
};
strobeScriptModel = require('app/base/Class').extend({
    version: {
        major: 1,
        minor: 0,
        patch: 0
    },
    toString: function() { return strobeScript.version.major + '.' + strobeScript.version.minor + '.' + strobeScript.version.patch},
    init: function(){
            var a = $('#chat-messages'),b = a.scrollTop() > a[0].scrollHeight - a.height() - 20;
        a.append('<div class="chat-update"><span class="chat-text" style="color:#FF0000"><i>for strobe lights, /Strobe on ' + this.version.major + '.' + this.version.minor + '.' + this.version.patch + '</i></span></div>');
        b && a.scrollTop(a[0].scrollHeight);
                this.proxy = {
            onChat: $.proxy(this.onChat, this)
        };
    API.on(API.CHAT,this.proxy.onChat)
    },
    close: function(){
    	API.off(API.CHAT,this.proxy.onChat);
    },
    onChat: function(data){
        if (data.type == 'message' && (API.hasPermission(data.fromID, API.ROLE.NONE)) && data.message.indexOf('/strobe on') === 0) {
            API.chatLog(data.from + ' hit the strobe light!');
           require ('app/views/room/AudienceView').strobeMode('true');
        }
         else if (data.type == 'message' && (API.hasPermission(data.fromID, API.ROLE.NONE))  && data.message.indexOf('/strobe off') === 0) {
            require ('app/views/room/AudienceView').strobeMode();
        }
         else if (data.type == 'message' && (API.hasPermission(data.fromID, API.ROLE.NONE))  && data.message.indexOf('/rave on') === 0){
            API.chatLog(data.from + ' turned the lights down!');
             require ('app/views/room/AudienceView').lightsOut('true');
        } 
        else if (data.type == 'message' && (API.hasPermission(data.fromID, API.ROLE.NONE))  && data.message.indexOf('/rave off') === 0) {
            require ('app/views/room/AudienceView').lightsOut();
        }
    },
	});
var strobeScript = new strobeScriptModel;
