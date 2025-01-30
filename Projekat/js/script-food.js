$(document).ready(function(){
    let br = $(".jela").attr("id");
    let broj = "prosek-" + br;
    let oceni = parseInt(localStorage.getItem(broj));

    if(!isNaN(oceni)){
        document.getElementById("prosek").innerHTML = "Prosečna ocena jela je: " + oceni;
    } else {
        document.getElementById("prosek").innerHTML = " ";
    }

    $("#dodaj").click(function(event){
        event.preventDefault(); // Dodato da se spreči ponovno učitavanje stranice
        let kolicina = document.getElementById("kolicina").value;
        if(kolicina != "" && kolicina > 0){
            let porcija = document.querySelector('input[name=velicina]:checked').value;
            let jelo = $(".jelo").attr("id");

            let jeloo = jelo.split('-');
            jelo = jeloo.join(' ');

            let jeloE = $(".jeloen").attr("id");
            let en=jeloE.split('-');
            jeloE=en.join(' ');

            let porcijaEn;
            if(porcija === "mala"){
                porcijaEn = "small";
            } else {
                porcijaEn = "big";
            }

            let id = parseInt(localStorage.getItem("id"));
            if (isNaN(id)) {
                id = 1;
            }
            localStorage.setItem(`porudzbina_${id}`, JSON.stringify({
                broj: id,
                nazivSr: jelo,
                nazivEn: jeloE,
                porcijaSr: porcija,
                porcijaEn: porcijaEn,
                kolicina: kolicina
            }));
            id++;
            localStorage.setItem("id", id);
            let jezik = localStorage.getItem("language");
            if (jezik == "sr"){
                alert("Uspešno je dodato u korpu jelo " + jelo);
            } else {
                alert("Dish successfully added to the cart: "+jeloE);
            }
        }
    });

    $("#oceni").click(function(){
        let ocena = parseInt(document.getElementById("ocena").value);

        if (isNaN(ocena)) {
            alert("Molimo vas da odaberete validnu ocenu.");
            return;
        }

        let jeloBr = $(".jela").attr("id");
        let opis = "prosek-" + jeloBr;

        let prosecnaOcena = parseInt(localStorage.getItem(opis));
        let prosek;
        if(isNaN(prosecnaOcena)){
            prosek = ocena;
        } else {
            prosek = Math.floor((ocena + prosecnaOcena) / 2);
        }

        localStorage.setItem(opis, prosek);

        let tekstt = "";
        let jezikk = localStorage.getItem("language");
        if (jezikk == "sr"){
            tekstt = "Prosečna ocena jela je: " + prosek;
        } else {
            tekstt = "Average dish rating: " + prosek; 
        }

        document.getElementById("prosek").innerHTML = tekstt;
    });

    $("#preuzmiJelovnik").click(function(){
        const pdfUrl = "../menu/jelovnik.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "jelovnik.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
