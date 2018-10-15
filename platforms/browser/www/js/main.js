class Main{

	constructor(){

		this.messenger = null;
	}

	sendMessage(recipient,message){

		this.messenger = {
		    sendSms: function() {
		        var number = recipient.value.toString(); /* iOS: ensure number is actually a string */
		        var message = message.value;
		        console.log("number=" + number + ", message= " + message);

		        //CONFIGURATION
		        var options = {
		            replaceLineBreaks: false, 
		            android: {
		                intent: '' 
		            }
		        };

		        var success = function () { alert('Message sent successfully'); };
		        var error = function (e) { alert('Message Failed:' + e); };
		        sms.send(number, message, options, success, error);
		    }
		};

		this.messenger.sendSms();

	}
}