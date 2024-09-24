function funzioneEs4(){
    for(i = 0 ; i < 16 ; i++){
        if(i % 2 == 1){
            console.log("Il numero "+i+" è dispari")
            let lista = document.getElementById("lista2");
            let aggiunta = document.createElement("li");
            aggiunta.textContent = "Il numero "+i+" è dispari";
            lista.appendChild(aggiunta);
            console.log(i);
        }else{
            console.log("Il numero "+i+" è pari")
            let lista = document.getElementById("lista2");
            let aggiunta = document.createElement("li");
            aggiunta.textContent ="Il numero "+ i + " è pari";
            lista.appendChild(aggiunta);
            console.log(i);
        }
    }
}