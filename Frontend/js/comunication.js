/*
  this allows for various types of http comunications protocals
  all of them are asynchronous so therefor they have various levels of call backs
  such as
    none
    a callback with no arguments
    a callback with 1 arg
*/

//this does an http get request with a callback and no arguments
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}


//this does an http post request with a no callbacks.
// the response is loged in the console
function httpPostAsync(theUrl, params) {
  var http = new XMLHttpRequest();
  var url = theUrl;
  http.open("POST", url, true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
    }
  }
  http.send(params);
}


//this does an http post request with a callback and no arguments
function httpPostAsyncCallBack(theUrl, params, callback) {
  var http = new XMLHttpRequest();
  var url = theUrl;
  http.open("POST", url, true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
      callback(http.responseText);
    }
  }
  http.send(params);
}


// this does an http post request with a callback and 1 arguments that gets
// put into the callback
function httpPostAsyncCallBackExtraData(theUrl, params, callback, extra) {
  console.log("hisadoashsudioashoidjaspod");
  var http = new XMLHttpRequest();
  var url = theUrl;
  http.open("POST", url, true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
      callback(http.responseText, extra);
    }
  }
  http.send(params);
}
