<?php

/**
  *Operations:
   *0 -- (register)
	 *1 -- (login)
   */

   // gets search queries from the client
$Operation = htmlspecialchars($_GET["Operation"]);			// gets the operation the client wants to perform

// now depending on the operation we will search for diffirent variables and run diffirent functions
switch ($Operation) {
	case "0":
		include 'user.php';
		$username = htmlspecialchars($_POST["username"]);			// gets the operation the client wants to perform
		$password = htmlspecialchars($_POST["password"]);			// gets the operation the client wants to perform
		register($username, $password);
		break;
	case "1":
		include 'user.php';
		$username = htmlspecialchars($_POST["username"]);			// gets the operation the client wants to perform
		$ID_NUMBER = htmlspecialchars($_POST["password"]);
		login($username, $ID_NUMBER);
		break;
  }

?>
