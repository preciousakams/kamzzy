<?php

if(isset($_POST['submit'])) {
    $fname ="First Name:".$_POST['firstName']."\n";
    $lname = "Last Name:".$_POST['lastName']."\n";
    $mail ="Email:".$_POST['email']."\n";
    $details=$_POST['firstName']."";

    $file =fopen("./Responses/$details.txt","a+");
    fwrite($file, $fname);
    fwrite($file, $lname);
    fwrite($file, $mail);
    fclose($file);
}
?>