//login
function login(form){
    if (form.user.value=="gera") {
      if(form.password.value == "12345"){
          location="principalgera.html";

     } else{
          alert("VERIFICA TU CONTRASEÑA");

      }
     
     
     
  } else {
      alert("VERIFICA TU USUARIO");
     
     
  }

}
//CUENTA2

var cuentaGera = 290;





function saldo(){   

    alert( "Tu saldo actual es: $" + cuentaGera);

}

function depositar(){

    var deposito = Number(document.getElementById("display").value);
    // alert("Tu saldo nuevo es $" + (cuentaMali+deposito));

    if (cuentaGera+deposito>=1000 ){
        alert("tu cuenta no puede terner mas de $1000 tu saldo actual es de  $" + (cuentaGera));


    } else{
        alert( "deposito exitoso tu saldo es de $" + (cuentaGera+deposito));
            
    }

}



function retirar(){
    
    var retiro = Number(document.getElementById("display").value);
   
    if (cuentaGera-retiro>=10 ){
        alert("Retiro exitoso, tu saldo actual es de: $" + (cuentaGera-retiro));


    } else{
        alert( "Tu cuenta debe tener minimo $10, tu saldo actual es: $" + cuentaGera);
            
    }
            
    
}