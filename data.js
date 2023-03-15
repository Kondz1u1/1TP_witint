const months = ["Styczen", "Luty", "Marzec", "Kwiecien", "Maj", "Czerwiec", "Lipiec", "Sierpien", "Wrzesien", "Pazdziernik", "Listopad", "Grudzien"];
const days = ["Poniedzialek","Wtorek","Sroda","Czwartek","Piatek","Sobota","Niedziela"];

function loop() {
    var d = new Date();
    document.getElementById("a").innerHTML = "Dzien: " + d.getDate();
    document.getElementById("c").innerHTML = "Rok: " + d.getFullYear();
    document.getElementById("d").innerHTML = "Miesiac: " + months[d.getMonth()];
    document.getElementById("e").innerHTML = "Godzina: " + d.getHours();
    document.getElementById("f").innerHTML = "Minuty: " + d.getMinutes();
    document.getElementById("g").innerHTML = "Sekundy: " + d.getSeconds();
    document.getElementById("h").innerHTML = "Milisekundy: " + d.getMilliseconds();
}

function showAlert() {

    alert("Wysokosc: " + innerHeight + " Szerokosc: " + innerWidth);

}
var interval = setInterval(loop, 1);
setTimeout (showAlert, 5000);


