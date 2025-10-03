function camb_nomb(){
    let nom = prompt("INTRODUCE UN NOMBRE: ");
    document.getElementById("nom").innerHTML = nom;

}

function transform(){
    let url = prompt("¿QUIÉN QUIERES SER?: ")
    const image = document.getElementById("profile");
    image.src = url;

}

function travel(){
    const body = document.getElementsByTagName("body")[0];
    let url2 = prompt("¿DÓNDE QUIERES VIAJAR?: ");
    body.style = "background-image: url('"+url2+"'); background-size:cover;"
}


function learn(){
    const body = document.getElementsByTagName("html")[0];
    body.style.fontFamily = "fantasy"
}

function invisible(){
    if (document.getElementById("profile").hidden == true){
        document.getElementById("profile").hidden = false;
    }else{
        document.getElementById("profile").hidden = true;
    }
}

function more_info(){
    const expL = document.getElementById("expL");
    const nothing = document.getElementById("nothing"); 
    if (nothing){   //Si existe "nothing"
        nothing.remove();  //Elimina el string "Nada" del apartado experiencia laboral
    }
    let content = prompt("¿QUÉ QUIERES AÑADIR?: ");
    let lista = document.createElement("li");
    lista.innerHTML = content;
    expL.appendChild(lista);
}