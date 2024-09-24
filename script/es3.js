function funzioneEs3() {
    let html = "";
    
    for (i = 0; i < 11; i++) {
        if(i == 3 || i == 8){
            continue;
        }else{
            let lista = document.getElementById("lista");
            let aggiunta = document.createElement("li");
            aggiunta.textContent = i;
            lista.appendChild(aggiunta);
            console.log(i);
        }
        
        /* html = "<span> " + i + " </span>";
        Es3.innerHTML = html;  */

    }
}

