<?php
// variables
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "LibraryBOOKS";
// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// this will create the database in the mysql server using the name above
$sql = "CREATE DATABASE " . $dbname;	// this query is sent to the database
if ($conn->query($sql) === TRUE) {
    	echo "success creating database </br>";
} else {
    	echo "Error creating database " . $conn->error . "</br>";
}
$conn->close();
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// build the USERS table
$sql = "create table USERS(
  USERNAME VARCHAR(64),
  PASSWORD VARCHAR(64))";	// this query is sent to the database
if ($conn->query($sql) === TRUE) {
  echo "success USERS_TABLE </br>";
} else {
    	echo "Error creating table USERS: " . $conn->error . "</br>";
}
// build loged on table
$sql = "create table MESSAGES(USERNAME VARCHAR(64), MESSAGE VARCHAR(200))";	// this query is sent to the database
if ($conn->query($sql) === TRUE) {
echo "success BOOKS_TABLE </br>";
} else {
    	echo "Error creating table BOOKS: " . $conn->error . "</br>";
}

$conn->close();
?>
