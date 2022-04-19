function validate(){
    var mail=document.getElementById("email");
    var pwd=document.getElementById("password");
   
    var emailLabel=document.getElementById("emailLabel");
    var pwdLabel=document.getElementById("pwdLabel");

    let strengthBadge = document.getElementById('strengthdisplay');
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
    let timeout;
    validatepassword(pwd);
    pwd.addEventListener("input", () => {

        //The badge is hidden by default, so we show it
    
        strengthBadge.style.display= 'block'
        clearTimeout(timeout);
    
        //We then call the StrengChecker function as a callback then pass the typed password to it
    
        timeout = setTimeout(() => StrengthChecker(pwd.value), 500);
    
        //Incase a user clears the text, the badge is hidden again
    
        if(pwd.value.length !== 0){
            strengthBadge.style.display != 'block'
        } else{
            strengthBadge.style.display = 'none'
        }
    });
}

//     var regex=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
//     var regno=/^[0-9]{10}$/;
   
//     // if(mail.value.trim()==""||pwd.value.trim()==""){
//     //     emptylabel.innerHTML="<p>Fields cannot be empty</p>";
//     //     emptylabel.style.color="red";
//     //     return false;
//     // }
  



   
// mail.onkeydown=function(){
//     if(regex.test(mail.value)){
//         emailLabel.innerHTML="<p>Email id is valid</p>";
//         emailLabel.style.color="green";
//         return true;
//     }
//     else{
//         emailLabel.innerHTML="<p>Invalid email id</p>";
//         emailLabel.style.color="red";
//         return false;
//     }
// }

//     pwd.onkeydown=function(){
        
//         if(regno.test(pwd.value)){
//         pwdLabel.innerHTML="<p>Email id is valid</p>";
//         pwdLabel.style.color="green";
//         return true;
//     }
//     else{
//         pwdLabel.innerHTML="<p>Invalid email id</p>";
//         pwdLabel.style.color="red";
//         return false;
//     }
//     }
// }
//validate email
 function validateemail(mail){
    var regex=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regex.test(mail.value)){
                emailLabel.innerHTML="<p>Email id is valid</p>";
                emailLabel.style.color="green";
                return true;
            }
            else{
                emailLabel.innerHTML="<p>Invalid email id</p>";
                emailLabel.style.color="red";
                return false;
            }
 }
 //validate password
 function validatepassword(pwd){

if(strongPassword.test(pwd)) {
    strengthBadge.style.backgroundColor = "green";
    strengthBadge.textContent = 'Strong';
} else if(mediumPassword.test(pwd)){
    strengthBadge.style.backgroundColor = 'blue';
    strengthBadge.textContent = 'Medium';
} else{
    strengthBadge.style.backgroundColor = 'red';
    strengthBadge.textContent = 'Weak';
}

 }


    // var regno=/^[0-9]{10}$/;
    // if(regex.test(pwd.value)){
    //     emailLabel.innerHTML="<p>Email id is valid</p>";
    //     emailLabel.style.color="green";
    //     return true;
    // }
    // else{
    //     emailLabel.innerHTML="<p>Invalid email id</p>";
    //     emailLabel.style.color="red";
    //     return false;
    //
//  }
