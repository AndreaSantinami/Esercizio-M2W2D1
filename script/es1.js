function funzioneEs1() {
    let num1 = parseInt(document.getElementById("N1").value);
    let num2 = parseInt(document.getElementById("N2").value);
    let ris = "";
    let html = "";
    if (num1 > num2) {
        ris = num1;
        html = "<p> Il numero + grande è  " + ris + "</p> ";
    } else if (num1 < num2) {
        ris = num2
        html = "<p> Il numero + grande è  " + ris + "</p> ";
    } else {
        html = "<p> I due numeri sono uguali </p> ";
    }
    Es1.innerHTML = html;

}


