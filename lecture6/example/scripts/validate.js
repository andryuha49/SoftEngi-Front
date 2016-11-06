var validateEmail = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function onFormSubmit(){
    var result = true;
    var email = document.getElementById('inputEmail');
    
    email.classList.remove('error') ;
    if(!validateEmail(email.value)){
        var errorMessage = email.parentNode.getElementsByClassName('error-message')[0];
        errorMessage.innerText = 'e-mail is not valid';
        email.classList.add('error');

        result = false;
    }
    return result;
}