/*
  this handles the main operations that are important tro users
  such as authentication
*/

// this lets the user authenticat using a
//    username (staff nunmber)
//    password (id number)
function loginUser(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // now to comunicate with the api

      var path = "http://192.168.8.107/Html5-Chat/database/command.php?Operation=1";
      var params = "username='" + username + "'&password='" + password + "'";
      httpPostAsyncCallBack(path, params, respond);
}

// this is Responseible for handeling the response from the server for both
// the login and registration functions
function respond(Response){
  console.log(Response)
  Response = JSON.parse(Response);
    if(Response["login"] == "false"){
      alert("Access denied");
    }else{
      alert("welcome " + document.getElementById("username").value);
      // now we save the user name in local storag

      localStorage.setItem("USER", document.getElementById("username").value);
      // and now we move on to the users profile page

      // now redirect to the landing page
      window.location.replace("ViewerMainAdminPannle.php");

    }
}

// this lets a new user get registered and takes them to the landing page
function registerUser(){

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // now to comunicate with the api

      var path = "http://192.168.8.107/Html5-Chat/database/command.php?Operation=0";
      var params = "username='" + username + "'&password='" + password + "'";
      httpPostAsyncCallBack(path, params, respond);

}

// this gets a profile of a customer and shows a report of the books they borowed
function getProfile(){
  var username = document.getElementById("username").value;

  // now to comunicate with the api

      var path = "../Backend/index.php?Operation=12";
      var params = "USERNAME='" + username  + "'";
      httpPostAsyncCallBack(path, params, profile);

}

// this handels the displaying of the users report
function profile(response){
  console.log(response);
  document.getElementById("reportOutput").innerHTML = response;
}
