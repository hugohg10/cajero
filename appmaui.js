
//login
function login(form){
    if (form.user.value=="maui") {
      if(form.password.value == "123456"){
          location="principalmaui.html";

     } else{
          alert("VERIFICA TU CONTRASEÑA");

      }
     
     
     
  } else {
      alert("VERIFICA TU USUARIO");
     
     
  }

}


var cuentaMaui = 67;


function saldo(){   

    alert( "Tu saldo actual es: $" + cuentaMaui);

}

function depositar(){

    var deposito = Number(document.getElementById("display").value);
    // alert("Tu saldo nuevo es $" + (cuentaMali+deposito));

    if (cuentaMaui+deposito>=1000 ){
        alert("tu cuenta no puede terner mas de $1000 tu saldo actual es de  $" + (cuentaMaui));


    } else{
        alert( "deposito exitoso tu saldo es de $" + (cuentaMaui+deposito));
            
    }

}



function retirar(){
    
    var retiro = Number(document.getElementById("display").value);
   
    if (cuentaMaui-retiro>=10 ){
        alert("Retiro exitoso, tu saldo actual es de: $" + (cuentaMaui-retiro));


    } else{
        alert( "Tu cuenta debe tener minimo $10, tu saldo actual es: $" + cuentaMaui);
            
    }
            
    
}