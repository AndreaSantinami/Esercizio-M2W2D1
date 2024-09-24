function funzioneEs2(){
    let N = parseInt(document.getElementById("N").value);
    let html ="";
    if( N < 5 ){
        html = "<p> Tiny </p>";
    }else if (N < 10){
        html="<p> Small </p>";
    }else if (N < 15){
        html="<p> Medium </p>";
    }else if (N < 20){
        html="<p> Large </p>";
    }else{
        html="<p> Huge </p>";
    }

    Es2.innerHTML=html;
}