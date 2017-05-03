<?php

  function speakToDB($Query, $conn){
    // query the db for users
    $result = $conn->query($Query);
    return $result;
  }

  function closeConn($conn){
	   $conn->close();
  }



  function createConnection(){
  	$servername = "localhost";
  	$DBusername = "root";
  	$DBpassword = "root";
  	$dbname = "Html5Chat";
  	$conn = new mysqli($servername, $DBusername, $DBpassword, $dbname);
  	// Check connection
  	if ($conn->connect_error) {
  		die("Connection failed: " . $conn->connect_error);
  	}
  	return $conn;
  }

  function removeQuotations($string){
  	$string = str_replace('"', "", $string);
  	$string = str_replace("'", "", $string);
  	return $string;
  }

?>
