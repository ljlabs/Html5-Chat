var messages = '[["kyle", "hello world"],["kyle","this is great"]]';

function load(){
  // first check for new messages
  checkForNewMessages(handleNewMessages);
}

// this is a placeholder function that will later be used to communicate with the server
function checkForNewMessages(callable){
  var response = messages;
  callable(response);
}

function handleNewMessages(response){
  console.log(response)
  var messagesJSON = JSON.parse(response);
  for(var i = 0; i < messagesJSON.length; i += 1){
    document.getElementById("MessagesDisplay").innerHTML += card(messagesJSON[i]);
  }
}
