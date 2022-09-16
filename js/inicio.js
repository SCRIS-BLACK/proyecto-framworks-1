function ir(){

    var cc = 123;
    var cu = "cliente";

    var ac = "asd";
    var au = "administrador";
    
    if(document.form.password.value==cc && document.form.login.value==cu){
            alert("Bienvenido");
            window.location="inicio.html";
    }  
    else{
        if(document.form.password.value==ac && document.form.login.value==au){
            alert("Bienvenido Administrador");
            window.location="administrador.html";
    }
    else{alert("contraseña o usuario incorrecto");}
        
    }
 }