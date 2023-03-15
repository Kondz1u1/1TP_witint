const DOMAIN_GOOGLE_MAPS = "https://www.google.pl/maps";

function constructGoogleMapsLink(latitude, longitude, zoom, output = ""){
  return `${DOMAIN_GOOGLE_MAPS}?q=${latitude},${longitude}&z=${zoom}&output=${output}`;
}
//uruchamianie mapy googla

console.warn(`Przęglądarka: ${navigator.appCodeName} | ${navigator.appVersion} - Przestarzałe!`); 
console.log(`Język: ${navigator.language}`);
console.log(`Ciasteczka: ${navigator.cookieEnabled ? "tak" : "nie"}`);
console.warn(`Platforma: ${navigator.platform} - Przestarzałe!`); 
//consol warn-ostrzeżenie alert
//console.log-służy do testowania, wysyłanie iwadomości

navigator.geolocation.getCurrentPosition((pos) => {//znajdowanie pozycji urządzenia
  var latitude = pos.coords.latitude;//znajdowanie pozycji urzydkownika
  var longitude = pos.coords.longitude;//znajdowanie pozycji urzydkownika
  document.getElementById("latitude").innerText = latitude;
  document.getElementById("longitude").innerText = longitude;
  document.getElementById("accuracy").innerText = Math.floor(pos.coords.accuracy/1000);
  document.getElementById("maps").href = constructGoogleMapsLink(latitude, longitude, 15);
  document.getElementById("frameMaps").src = constructGoogleMapsLink(latitude, longitude, 15, "embed");
});
//Math.floor-metoda zaokrąglanie liczny w dół
