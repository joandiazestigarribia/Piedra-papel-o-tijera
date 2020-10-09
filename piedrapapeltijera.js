function cambiarImagen(value){
    var imagen = document.getElementById("incognitoUsuario");
    if(value == 1){
        imagen.src="image1.png";
    }else if(value == 2){
        imagen.src="image2.png";
    }else if(value == 3){
        imagen.src="image3.png";
    }
}

function cambiarImagenResultadoM(valueMaquina){
    var imagen = document.getElementById("incognitoMaquina");
    if(valueMaquina == 1){
        imagen.src = "image1.png";
    }else if(valueMaquina == 2){
        imagen.src="image2.png";
    }else if(valueMaquina == 3){
        imagen.src="image3.png";
    }
}

function aleatorio(numero){
    var numero = (Math.floor((Math.random() * 3) + 1))
    console.log(numero);
    return numero;
}

function guardar(valor){
    // var valor = parseInt(document.querySelector('#opcion'));
    var valor = document.querySelector('.opcion:checked').value;
    return valor;
}


// $('input:radio[name="opcion"]').change(
//     function valor(){
//         if (this.checked && this.value == 1) {
//       		alert('piedra');
//         }else{
//         	alert('papel o tijera');
//         }
// });

function jugadaContinuar(jugadaContinuar){
    var z=guardar();
    var y =z-1;
    var opciones=["PIEDRA","PAPEL","TIJERA"];
    var jugadaContinuar=opciones[y];
    return jugadaContinuar;
}

function confirmarJuego(){
    var confirmar = window.confirm("Su jugada elegida es " + jugadaContinuar() + ", desea continuar?");
    var opciones = ["piedra", "papel", "tijera"];
    if(confirmar){
        var eleccionUsuario = guardar();
        var jugadaUsuario = opciones[eleccionUsuario-=1];
        var eleccionMaquina = aleatorio(1,3);
        var jugadaMaquina = opciones[eleccionMaquina-=1];
        var resultado = jugadaUsuario + jugadaMaquina;
        var usuario = document.querySelector('#usuario');
        usuario.innerHTML = ("tu jugada: " + jugadaUsuario)
        var maquina = document.querySelector('#maquina');
        maquina.innerHTML = ("jugada de la maquina: " + jugadaMaquina);
        var total = document.querySelector('#total');

            switch (resultado) {
                case "piedrapiedra":
                    var final = "Empate, ¡intentalo de vuelta!"
                    total.innerHTML = ("Resultado: " + final);
                    cambiarImagenResultadoM(1);
                    break;

                case "piedrapapel":
                    var final = "Perdiste, ¡volvé a intentarlo!";
                    total.innerHTML = ("Resultado: " + final)
                    cambiarImagenResultadoM(2);
                    break;

                case "piedratijera":
                    var final = "¡Ganaste!";
                    total.innerHTML = ("Resultado: " + final)
                    cambiarImagenResultadoM(3);
                    break;

                 case "papelpiedra":
                    var final="¡Ganaste!";
                    total.innerHTML=("Resultado: " + final);
                    cambiarImagenResultadoM(1);
                    break;  
                    
                case "papelpapel":
                    var final="Empate, ¡intentalo de vuelta!";
                    total.innerHTML=("Resultado: " + final);
                    cambiarImagenResultadoM(2);
                    break;
                
                case "papeltijera":
                    var final="Perdiste, ¡volvé a intentarlo!";
                    total.innerHTML=("Resultado: " + final);
                    cambiarImagenResultadoM(3);
                    break;
                    
                case "tijerapiedra":
                    var final="Perdiste, ¡volvé a intentarlo!";
                    total.innerHTML=("Resultado: " + final);
                    cambiarImagenResultadoM(1);
                    break;

                case "tijerapapel":
                     var final="¡Ganaste!";
                    total.innerHTML=("Resultado: " + final);
                    cambiarImagenResultadoM(2);
                    break;

                case "tijeratijera":
                    var final="Empate, ¡intentalo de vuelta!";
                    total.innerHTML=("Resultado: " + final);
                    cambiarImagenResultadoM(3);
                    break;
        }
        // document.querySelector('#opcion').value="";
        // return true;
    }
    // else{
    //     document.querySelector('#opcion').value="";
    //     return false;
    // }
}

