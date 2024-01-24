<?php
include __DIR__ . "/conn.php";

$email = $_POST["email"];
$password = $_POST["password"];

$sql = "SELECT * FROM users 
        WHERE email = '".$email."' AND password = '".$password."'" ;

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $_SESSION["userDetails"] = [
        "id" => $row["id"],
        "firstname" => $row["firstname"],
        "lastname" => $row["lastname"],
        "email" => $row["email"],
    ];
  }
  header('Location: /?login=1');
} else {
  echo "0 results";
}


$conn->close();

?>