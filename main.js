function validateform(){  
    var first_name=document.myform.first_name.value;  
    var last_name=document.myform.last_name.value;
    var email=document.myform.email.value;
    var password=document.myform.password.value;  
      
    if (first_name==null || first_name==""){  
      alert(" First Name can't be blank");  
      return false;
    } else if (last_name==null || last_name==""){  
        alert("Last Name can't be blank");  
        return false;  
     }
    else if(email==null || email==""){
        alert("email can't be blank");
        return false;
    } else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }  
    function passwordGenerator(){
      var inputBox = document.getElementById("password");
      var result = " ";
      for(var i=0;i<10;i++){
      var chars = "abcdefghijklmnopqrstuvwxyz1234567890/+@$&-%"
      var random = Math.floor(Math.random()*40);
      result += chars.charAt(random);
      }
    inputBox.value = result;
    }