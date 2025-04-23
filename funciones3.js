



document.getElementById("botonEnviar").addEventListener("click", carnet2);
function carnet2(){
    let mensaje=['',false];
    let nombreUsuario = document.getElementById("nombre").value;
    let edadUsuario = document.getElementById("edad").value;

    if(nombreUsuario.trim()==""){
        mensaje+="Nombre no válido";
    } else{
        if (nombreUsuario.trim().toLowerCase()=="jesus") {
            mensaje[0]+="jesus no puede sacarse el carnet"
            mensaje[1]=false;
        } else {
            switch(true) {
                case edadUsuario<0:
                    mensaje[0]+="No ha nacido";
                    mensaje[1]=false;
                    break;
                case edadUsuario<18:
                    mensaje[0]+="demasiad joven";
                    mensaje[1]=false;
                        break;
                case edadUsuario<100:
                    mensaje[0]+="Vale";
                    mensaje[1]=true;
                    break;
                case edadUsuario >100:
                    mensaje[0]+= "Demasiado viejo";
                    mensaje[1]=false;
                    break;
                
                default: 
                    mensaje[0]+= "edad no contemplada";
                    mensaje[1]=false;
            }
        }    
    }


    document.getElementById("mensaje").textContent= mensaje[0];
    if (mensaje[1]== true) {
        document.getElementById("mensaje").style.backgroundColor="rgb(28, 80, 32)";

    }else{
        document.getElementById("mensaje").style.backgroundColor="rgb(161, 30, 7)";
    }

}
