<!--Esta es la funcion principal que valida si los campos estan abiertos o vacios.-->
function validateRequired(){
  <!--Este es el valor de formValidity-->
  var formValidity="True"
var name = document.myForm.contactname.value;  
var email= document.myForm.email.value; 
  var numero= document.myForm.numtelefono.value;  

  if (name == null || name=="") { document.getElementById("messagename").innerHTML = "*Fill the Contact name field please!";
    
  }
  if (numero == null || numero=="") { document.getElementById("messagenumber").innerHTML = "*Fill the Phone Number field!";
    
}
  if (email == null || email=="") {
    document.getElementById("messageemail").innerHTML = "*Fill the email please!";
    return false;
  }
}
function createEventListeners(){
addEventListener("click",validateRequired)
}
<!-- Esta es la funcion de validate form que conecte con otro boton.-->
 function validateForm(){
 var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if (email.value.match(mailformat))
{
document.getElementById("messageemail").innerHTML = "Your email is valid.";    
return true;
}
else
{
document.getElementById("messageemail").innerHTML = "*Make sure your email has at least an uppercase letter, a lowercase letter and numbers in it.";    

return false;
}  
}
var name = document.getElementById("contactname").value;
if (name.length>8){
document.getElementById("messagename").innerHTML = "Your Contact name is valid."
}
else {document.getElementById("messagename").innerHTML = "Your name is not valid. (20 characters required)"}

  var numero = document.getElementById("numtelefono").value;
  if(numtelefono<9)
        { document.getElementById("messagenumber").innerHTML = "*Your Phone Number is valid";
      
        }
      else
        { document.getElementById("messagenumber").innerHTML = "*Fill the Phone Number field with at least 9 numeric characters!"
        ;
      
        }
