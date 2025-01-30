document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([44.80857, 20.46682], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([44.80857, 20.46682]).addTo(map)
        .bindPopup('Kineski restoran "Zmaj"<br>Bulevar kralja Aleksandra 73, Beograd.')
        .openPopup();
});