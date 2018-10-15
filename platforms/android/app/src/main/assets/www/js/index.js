var messenger  = new Main();

document.getElementById('sendBtn').addEventListener('click',function(){

    var recipientNum =  document.getElementById('numberTxt').value;
    
    var message =       document.getElementById('messageTxt').value;

    if(recipientNum !== '' && message!==''){
        messenger.sendMessage(recipientNum,message);
    }else{
        alert('Please Enter # and Message');
    }

});


