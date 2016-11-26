var requestObject = {login: 'user13', password: 'password'};

var request = new XMLHttpRequest();
request.open('POST', 'http://localhost:8080/api/auth/login', true);
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify(requestObject));
request.onreadystatechange = function(){
  if(request.readyState == 4){
    switch(request.status){
      case(200):
        var response = JSON.parse(request.responseText);
        //save token
        console.log(response);
        break;
      case(404):
      case(500):
      default:
        var response = JSON.parse(request.responseText);
        //show error
        console.log(response);
    }
  }
}