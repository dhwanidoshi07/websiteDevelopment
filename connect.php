<?php
    $firstName= $_POST['firstName'];
    $lastName= $_POST['lastName'];
    $emailId= $_POST['emailId'];
    $mobileNumber= $_POST['mobileNumber'];
    $messageSend= $_POST['messageSend'];

    //database connection
    $conn = new mysqli('localhost','root','','test');
    if ($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into registration(firstName, lastName, emailId, mobileNumber, messageSend) values(?,?,?,?,?)");
        $stmt->bind_param("sssis",$firstName,$lastName,$emailId,$mobileNumber,$messageSend);
        $stmt->execute();
        echo "message sent....";
        $stmt->close;
        $conn->close;
    }
?>