function otworzStrone(){
    window.open();
}
function komunikat(){
    window.setTimeout(() => {
        window.alert("Opozniony komunikat o 2s");
    }, 2_000);
}
window.setInterval(() => {
    document.getElementById("windowWidth").innerText = window.innerWidth;
    document.getElementById("windowHeight").innerText = window.innerHeight;
}, 1_000);