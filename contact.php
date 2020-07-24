<?php

//settings
$name = $_REQUEST['c_name'];
$email = $_REQUEST['c_email'];
$message = $_REQUEST['c_message'];


//check input filds
if(empty($name) || empty($email) || empty($message))
{
    echo "Please fill all fields";
}
else
{
    mail("antonhound@gmail.com", "Website Message", $message, "From : $name <$email>");
    echo "<script type = 'text/javascript'>alert('Message sent successfully'); window.history.log(-1);</script>" ;
}

?>