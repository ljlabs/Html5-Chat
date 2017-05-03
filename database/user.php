<?php
  function register($username, $password){
  	include 'constants.php';
  	$conn = createConnection();
  	$username = str_replace('"', "", $username);
  	$username = str_replace("'", "", $username);
  		$query = "select * from USERS where USERNAME=". $username;
  		if(speakToDB($query, $conn)->num_rows > 0){
  		$json = array(
  				"login" => "false",
  				"error" => "user already exists"
  		);
  		echo json_encode($json);
  		return;
  	}
  	// Query
  	$query = sprintf("INSERT INTO USERS
      VALUES( '%s', '%s')",
  			mysqli_real_escape_string($conn, $username),
  			mysqli_real_escape_string($conn, $password));
  	// query the db for users
  	$result = speakToDB($query, $conn);
    closeConn($conn);
  	$json = array(
      "login" => "true",
      "userID" => $username
  	);
  	echo json_encode($json);
  }
  function login($username, $Password){
  	// now we check if the user exists
  	// Query
  	include 'constants.php';
  	$conn = createConnection();
  	$query = sprintf("SELECT * FROM USERS WHERE USERNAME=" . $username);
  	//echo($query);
  	// query the db for users
  	$result = $conn->query($query);
  	if($result->num_rows != 1){
  		$json = array(
  				"login" => "false",
  				"error" => "user does not exists"
  		);
  		echo json_encode($json);
  		return;
  	}
  	if ($result->num_rows > 0) {
  		// output data of each row
  		while($row = $result->fetch_assoc()) {
  			if($row["PASSWORD"] == $Password){
  				$json = array(
  						"login" => "true",
  						"userID" => $username
  				);
  				echo json_encode($json);
  			}else{
  				$json = array(
  						"login" => "false",
  						"error" => "incorrect password"
  				);
  				echo json_encode($json);
  			}
  		}
  	} else {
  				$json = array(
  						"login" => "false",
  						"error" => "user does not exist"
  				);
  				echo json_encode($json);
  	}
  	$conn->close();
  }
?>
