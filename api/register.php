<?php
include __DIR__ . "/conn.php";

$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$password = $_POST["password"];

$sql = "INSERT INTO users (firstname, lastname, email, password)
VALUES ('".$firstname."', '".$lastname."', '".$email."', '".$password."')";

if ($conn->query($sql) === TRUE) {
  header('Location: /Register.html?register=1');
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>