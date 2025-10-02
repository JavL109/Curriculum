function camb_nomb(){
    let nom = prompt("INTRODUCE UN NOMBRE: ");
    document.getElementById("nom").innerHTML = nom;

}

function transform(){
    let url = prompt("¿QUIÉN QUIERES SER?: ")
    const image = document.getElementById("profile");
    image.src = url;

}


function learn(){
    
}

function invisible(){
    if (document.getElementById("profile").hidden == true){
        document.getElementById("profile").hidden = false;
    }else{
        document.getElementById("profile").hidden = true;
    }
}

function more_info(){
    
}