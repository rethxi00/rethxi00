<?php
$First Name=$_POST['fname'];
$Last Name=$_POST['lname'];
$Phone number=$_POST['phonenum'];
$Email Address=$_POST['emailid'];
$Password=$_POST['psw'];
$Weight=$_POST['weight'];
$Day=$_POST['day'];
$Month=$_POST['month'];
$Year=$_POST['year'];
$Membership code=$_POST['mbsc'];
$gender=$_POST['m'];
$gender=$_POST['f'];
$PURPOSE=$_POST['purpose'];
$CITY=$_POST['CITY'];
$COUNTRY=$_POST['COUNTRY'];

if (!empty($fname) || !empty($lname) ||  ! empty($phonenum) || !empty($emailid) || !empty($psw) || !empty($weight) || !empty($day) || !empty($month) || !empty($year) || !empty($mbsc) || !empty($m) || !empty($f) || !empty($purpose) || !empty($CITY) || !empty($country)) {
    $host = "localhost";
    $dbFirst Name= "root";
    $dbLast Name= "root";
    $dbPhone number= "";
    $dbEmail Address= "";
    $dbPassword= "";
    $dbWeight= "";
    $dbDay= "";
    $dbMonth= "";
    $dbYear= "";
    $dbMembership code= "";
    $dbgender=  "";
    $dbgender= "";
    $dbPURPOSE= "";
    $dbCITY= "";
    $dbCOUNTRY= "";

    //create connection between my PATIENT REGISTRATION FORM AND MySQL
    $conn = new mysqli($host, $First Name,$dbLast Name,$dbPhone Number,$dbEmail Address,$dbpassword,$dbbweight,$dbDate,Month,$dbYear,$dbMembership code,$dbpurpose,$dbCITY,$dbCountry)    
     
    if (mysqli_connect_error()){
        die('Connect Error ('.mysqli_connect_error().')'.mysqli_connect_error())
    }else {
        $SELECT ="SELECT Email Address from Register where Email =?Limit";
        $INSERT ="INSERT into Register(First Name,Last Name,Phone Number,Email Address,password,weight,Date,Month,Year,Membership code,PURPOSE,CITY,Country) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    //Prepare statement}
$stmt = $conn->prepare($SELECT);
$stmt -> bind_param("s",$Email Address);
$stmt -> execute();
$stmt -> bind_result($Email Address);
$stmt -> store_result();
$rnum = $stmt -> num_rows;

if ($rnum==0){
    $stmt -> close();

    $stmt = $conn->prepare($INSERT);
    $stmt = $conn->param("ssssii",$First Name,$dbLast Name,$dbPhone Number,$dbEmail Address,$dbpassword,$dbbweight,$dbDate,Month,$dbYear,$dbMembership code,$dbpurpose,$dbCITY,$dbCountry);
    $stmt -> execute();
    echo "New Patient's record inserted successfully";
    } else{
        echo "A patient has already registered using this Email Address";
    }
    $stmt->close();
    $conn->close();
}
} else {
    echo "All fields are required";
    die();
}
}
