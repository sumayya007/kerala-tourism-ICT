
//for signup form    
function formvalidation(){

    var name=document.getElementById("name").value;
    var nameLabel=document.getElementById("nameLabel");

    var age=document.getElementById("age").value;
    var ageLabel=document.getElementById("ageLabel");

    var email=document.getElementById("email").value;
    var emailLabel=document.getElementById("emailLabel");

    var phone=document.getElementById("phone").value;
    var phoneLabel=document.getElementById("phoneLabel");

    var password=document.getElementById("password").value;
    var passwordLabel=document.getElementById("passwordLabel");
    var passwordInfo=document.getElementById("passwordInfo");

    var repeatPassword=document.getElementById("repeatPassword").value;
    var repeatPasswordLabel=document.getElementById("repeatPwdLabel");
 
   
   
if(validatename(name))
{
  if(validateage(age))
  {
     if(validateemail(email))
     {
       if(validatephonenumber(phone))
       {
          if(validatepassword(password))
          {
            if(repeatpassword(password,repeatPassword))
            {
               return true;
            }
         
          }
        }
     }
  }
}

          
  return false;  

                  
}       


//for login form
function validatelogin(){
    var name=document.getElementById("name").value;
    var nameLabel=document.getElementById("nameLabel");
    var password=document.getElementById("password").value;
    var passwordLabel=document.getElementById("passwordLabel");
    var loginform=document.getElementById("loginform");
   
        
    if(name=="admin"&&password=="12345"){
        loginform.setAttribute("action","./adminpage.html");
        return true;
    }
    else if(validatename(name))
    {

        if(validatepassword(password))
        {
            return true;
        }
    }
    
    
    
        return false;
   
    
}



 //validate name
 function validatename(name){

 var regexName=/^[a-zA-Z\s]+$/;

if(name.length<=0){
    nameLabel.innerHTML="<p>Name is required</p>";
    nameLabel.style.color="red";
    return false;
}
else if(!regexName.test(name)){
   
    nameLabel.innerHTML="<p>Name should contain only alphabets</p>";
    nameLabel.style.color="red";
    return false;
}
return true;
 }

 //validate age
 function validateage(age){
  
     if(age.length<=0){
        ageLabel.innerHTML="<p>Age is required</p>";
        ageLabel.style.color="red";
        return false;
     }
     else if(age >= 0 &&  age <= 200){
         return true;
     }
     else{
        ageLabel.innerHTML="<p>Invalid age</p>";
        ageLabel.style.color="red";
         return false;
     }
    
 }

//validate email
 function validateemail(email){
  
    var regexEmail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,10})(.[a-z]{2,4})?$/;
    // var regexEmail= /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if(regexEmail.test(email)){
        emailLabel.innerHTML="<p>Email id is valid</p>";
        emailLabel.style.color="green";
        return true;
    }
    else{
        emailLabel.innerHTML="<p>Email id is invalid</p>";
        emailLabel.style.color="red";
        return false;
    }
 }
//validate phonenumber
 function validatephonenumber(phone){
   
    var regexPhonenumber=/^\d{10}$/;
    var regexPhoneVariations=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regexPhonenumber.test(phone)||regexPhoneVariations.test(phone)){
      
            phoneLabel.innerHTML="<p>Phone number is valid</p>";
            phoneLabel.style.color="green";
            return true;
        }
    else{
            phoneLabel.innerHTML="<p>Phone number is invalid</p>";
            phoneLabel.style.color="red";
            return false;
       
    }

 }

 //validate password
 function validatepassword(password){
    
    var regexStrong= new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
    var regexMedium=new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))');
    // var regexStrong= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})$/;
    // var regexMedium=/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))$/;
    if(regexStrong.test(password)){
       passwordLabel.innerHTML="<p>Strong</p>";
       passwordLabel.setAttribute("style","background-color:green");
       return true;
    
    }
    else if(regexMedium.test(password)){
        passwordLabel.innerHTML="<p>Medium</p>";
       passwordLabel.setAttribute("style","background-color:orange");
       passwordInfo.innerHTML="<p>Password should contain minimum 8 characters,at least one uppercase,one lowercase and a number</p>"
       passwordInfo.style.color="red";
       return false;
    
    }
    else{
        passwordLabel.innerHTML="<p>Weak</p>";
        passwordLabel.setAttribute("style","background-color:red");
        passwordInfo.innerHTML="<p>Password should contain minimum 8 characters,at least one uppercase,one lowercase and one number</p>"
       passwordInfo.style.color="red";
       return false;
    }
   
 }

 //validate repeatpassword
 function repeatpassword(password,repeatPassword){
     if(password!=repeatPassword){
        repeatPasswordLabel.innerHTML="<p>Password mismatch</p>";
        repeatPasswordLabel.style.color="red";
         return false;
     }
     else{
         return true;
     }

 }

 
 















    

