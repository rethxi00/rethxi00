function FormValidation(){
//alert(“Alert”)
var First Name=document.custom_form.First Name;
var Last Name=document.custom_form.Last Name;
var Phone number=document.custom_form.Phone number;
var Email=document.custom_form.Email;
var Password=document.custom_form.Password;
var Verify Password=document.custom_form.Verify Password;
var Weight=document.custom_form.Weight;
var Date=document.custom_form.Date;
var Month=document.custom_form.Month;
var Year=document.custom_form.Year;
var Membership Code=document.custom_form.Membership Code;
var Gender=document.custom_form.Gender;
var PURPOSE=document.custom_form.PURPOSE;
var CITY=document.custom_form.CITY;
var COUNTRY=document.custom_form.COUNTRY;

//Name validation
if (Name.value == “”) {
   Name.nextElementSibling.style.display = “block”;
   Name.style.border = “1px solid #f00”;
   return false
}else{
  name.nextElementSibling.style.display = “none”;
  name.style.border = “1px solid transparent”;
}

//phone no validation
if (!phone.value.match( /^\(?([5-9]{1})\)?([0-9]{9})$/) || phone.value == “”) {
   phone.nextElementSibling.style.display = “block”;
   phone.style.border = “1px solid #f00”;
   return false
}else{
  phone.nextElementSibling.style.display = “none”;
  phone.style.border = “1px solid transparent”;
}
//email validation
if (!Email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email.value == “”) {
    Email.nextElementSibling.style.display = “block”;
    Email.style.border = “1px solid #f00”;
    return false
 }else{
   Email.nextElementSibling.style.display = “none”;
   Email.style.border = “1px solid transparent”;
 }
//password box validation
if (Password.value == “”) {
   Password.nextElementSibling.style.display = “block”;
   Password.style.border = “1px solid #f00”;
   return false
}else{
  Password.nextElementSibling.style.display = “none”;
  Password.style.border = “1px solid transparent”;
}
//weight validation
if (weight.value == “”) {
   weight.nextElementSibling.style.display = “block”;
   weight.style.border = “1px solid #f00”;
   return false
}else{
  weight.nextElementSibling.style.display = “none”;
  weight.style.border = “1px solid transparent”;
  //Date, Month, Year validation
if (message.value == “”) {
   Date, Month, Year.nextElementSibling.style.display = “block”;
   Date, Month, Year.style.border = “1px solid #f00”;
   return false
}else{
    Date, Month, Year.nextElementSibling.style.display = “none”;
    Date, Month, Year.style.border = “1px solid transparent”;
}
//Membership Code validation
if (Membership Code.value == “”) {
    Membership Code.nextElementSibling.style.display = “block”;
    Membership Code.style.border = “1px solid #f00”;
    return false
 }else{
   Membership Code.nextElementSibling.style.display = “none”;
   Membership Code.style.border = “1px solid transparent”;
}
//Gender validation
if (Gender.value == “”) {
    Gender.nextElementSibling.style.display = “block”;
    Gender.style.border = “1px solid #f00”;
    return false
 }else{
    Gender.nextElementSibling.style.display = “none”;
    Gender.style.border = “1px solid transparent”;
}
//PURPOSE validation
if (PURPOSE.value == “”) {
    PURPOSE.nextElementSibling.style.display = “block”;
    PURPOSE.style.border = “1px solid #f00”;
    return false
 }else{
    PURPOSE.nextElementSibling.style.display = “none”;
   PURPOSE.style.border = “1px solid transparent”;
}
//CITY validation
if (CITY.value == “”) {
    CITY.nextElementSibling.style.display = “block”;
    CITY.style.border = “1px solid #f00”;
    return false
 }else{
   Membership Code.nextElementSibling.style.display = “none”;
   Membership Code.style.border = “1px solid transparent”;
}
//COUNTRY validation
if (COUNTRY.value == “”) {
    COUNTRY.nextElementSibling.style.display = “block”;
    COUNTRY.style.border = “1px solid #f00”;
    return false
 }else{
    COUNTRY.nextElementSibling.style.display = “none”;
   COUNTRY.style.border = “1px solid transparent”;
}
