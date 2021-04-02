//SEPARAR LA FRASE EN LETRAS

function separar() {
    var str = document.getElementById("entrada").value;
    var res = str.split("");
    var can = str.split("").length;
    document.getElementById("salida").innerHTML = res;
    invertirFrase(res);
}

var invFrase =[];

function invertirFrase(texto){
    for(var i=0; i<res.length;i++){
        invFrase = res[(res.length-1)-i];
    }
}

// CONOCER LA POSICION DE LOS ESPACIOS QUE SEPARAN LAS PARABLAS
function posicionEspacios() {
    var ubiEsp = [];
    // este ciclo recorrera letra por letra
    for(var i=0; i<can;i++) {
        if(res[i]==" "){
            var cantEs=+1;
            ubiEsp.push(i);
        } 
    }
}

//Funcion para eliminar los espacios de la frase original
function eliminarEspacio(){
    //texto sin espacio
    var textSE = '';
    for(var i=0; i<can; i++){
        if(res[i]!=" "){
           textSE.push(i);
        }
    }
}

function Textos(string){//Solo numeros
    var out = '';
    var filtro = 'qwertyuiopasdfghjklñzxcvbnmáéíóú QWERTYUIOPASDFGHJKLÑZXCVBNMÁÉÍÓÚ';//Caracteres validos
	
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
	     out += string.charAt(i);
	
    //Retornar valor filtrado
    return out;
} 