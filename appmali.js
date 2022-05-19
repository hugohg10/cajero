

//login
function login(form){
    if (form.user.value=="mali") {
      if(form.password.value == "1234"){
          location="principal.html";

     } else{
          alert("VERIFICA TU CONTRASEÑA");

      }
     
     
     
  } else {
      alert("VERIFICA TU USUARIO");
     
     
  }

}

var cuentaMali = 200;

function saldo(){   

    alert( "Tu saldo actual es: $" + cuentaMali);

}

function depositar(){

    var deposito = Number(document.getElementById("display").value);
    // alert("Tu saldo nuevo es $" + (cuentaMali+deposito));

    if (cuentaMali+deposito>=1000 ){
        alert("tu cuenta no puede terner mas de $1000 tu saldo actual es de  $" + (cuentaMali));


    } else{
        alert( "deposito exitoso tu saldo es de $" + (cuentaMali+deposito));
            
    }

}



function retirar(){
    
    var retiro = Number(document.getElementById("display").value);
   
    if (cuentaMali-retiro>=10 ){
        alert("Retiro exitoso, tu saldo actual es de: $" + (cuentaMali-retiro));


    } else{
        alert( "Tu cuenta debe tener minimo $10, tu saldo actual es: $" + cuentaMali);
            
    }
            
    
}


/*function guardarLocalStorage(){
    let cuetas = {
        nombre: Mali,
        saldo: 200,

    }
    let nombre = "";
    localStorage.setItem("nombre", nombre )
};
*/
/*
var cuentas = [
    { nombre: “Mali”, saldo: 200 }
    { nombre: “Gera”, saldo: 290 }
    { nombre: “Maui”, saldo: 67 }
];

*/
/*
localStorage.setItem("cuentaMali","200");
localStorage.setItem("cuentaGera","290");
localStorage.setItem("cuentaMaui","67");
alert(localStorage.getItem("cuentaMali"));
*/


