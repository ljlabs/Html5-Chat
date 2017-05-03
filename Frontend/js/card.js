function card(messageDetails){
  // the image in the scaffold is a place holder that will be replaced by a users profile picture
  var scaffold = " \
  <div class='rounded-message-box' style='width:100%'> \
    <table> \
      <tr> \
        <th> \
          <img src='http://192.168.8.107/Html5-Chat/database/profilePictures/default.jpg' class='round-image-view'></img> \
          <br> \
          <label>" + messageDetails[0] + "</label> \
        </th> \
        <th> \
          <label>" + messageDetails[1] + "</label> \
        </th> \
      </tr> \
    </table> \
    </div> \
    </br>";
  return scaffold;
}
