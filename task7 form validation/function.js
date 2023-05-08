    var phone = document.getElementById("third").value;
    var mail = document.getElementById("four").value;
    var nameerror = document.getElementById("name-error");
    var lastnameerror = document.getElementById("lastname-error");
    var phonenumbererror = document.getElementById("phone-error");
    var mailerror = document.getElementById("mail-error");
function validation (){
    var f1name = document.getElementById("first").value;
    if(f1name.length==0){
        nameerror.innerHTML=" Please fill the Firstname";
        return false;
    }
    if(!f1name.match(/^[a-zA-Z]+$/)){
        nameerror.innerHTML=" enter alphabet  only";
        return false;
    }
}
// lasrname
function validation2 (){
    var lname = document.getElementById("second").value;
    if(lname.length==0){
        lastnameerror.innerHTML=" Please fill the Lastname";
        return false;
    }
    if(!lname.match(/^[a-zA-Z]+$/)){
        lastnameerror.innerHTML=" enter alphabet  only";
        return false;
    }
}
// phone
function validation3 (){
   var phone = document.getElementById("third").value;
    if(phone.length==0){
        phonenumbererror.innerHTML=" Please fill the phone num";
        return false;
    }
    if(phone.length!==10){
        phonenumbererror.innerHTML=" Please enter 10 num";
        return false;
    }
    if(!phone.match(/^[0-9]+$/)){
        phonenumbererror.innerHTML=" enter number only";
        return false;
    }
}
/// mail
function validation4 (){
var mail = document.getElementById("four").value;
    if(mail.length==0){
        mailerror.innerHTML=" Please fill the mail Id";
        return false;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           if(mail.value.match(mailformat)){
        mailerror.innerHTML=" enter valid mail Id";
        return false;
    }
    document.getElementById("button").action  = "next.html";
}

