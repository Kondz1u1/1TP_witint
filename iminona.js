var imie = prompt("Podaj imie: ");
var i = 0;
var taskId = setInterval(() => {
    if(i < imie.length){
        document.getElementById("name").innerText += imie[i++];
    }else{
        clearInterval(taskId);
    }
}, 1_000);