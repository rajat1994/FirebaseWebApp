var myRef = new Firebase('https://amber-heat-1839.firebaseio.com/');

var user = $('#username');
var text = $('#message');
var send_button =$('#post');

send_button.click(function (){
	myRef.push({
		username: user.val(),
		message: text.val()
		
	});
 txt.val('');
});

myRef.on('child_added', function(snapshot) {
    msg = snapshot.val();
    var new_message = $('<div/>');
    new_message.append('<p><strong>' + msg.username + '</strong></p><p>' + msg.message + '</p>');
    //add a class for styling purposes    
    new_message.addClass('msg');

    // to differentiate between your messages and someone else's messages, we'll add a class 'me'
    // to your messages and style them accordingly
    // new_message.addClass(msg.user == username_input.val() ? ' me' : '')   // this is an inline version of if-else    

    $("#results").append(new_message);
});
var gloginButton = $('#glogin');
google_login_button.clicked(function(){
});

