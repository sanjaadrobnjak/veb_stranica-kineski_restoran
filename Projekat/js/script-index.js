$(document).ready(function(){

    function odrediJelo(jeloBr){
        switch(jeloBr){
            case "prvo":
                return "pileće rolnice sa povrćem";
            case "dugo":
                return "gjoze sa svinjetinom";
            case "trece":
                return "terijaki pileći ražnjići";
            case "cetvrto":
                return "kung pao piletina";
            case "peto":
                return "slatko kisela svinjetina";
            case "sesto":
                return "mapo tofu";
            case "sedmo":
                return "puding od manga";
            case "osmo":
                return "sladoled od susama";        
        }
        return "mesečev kolač";
    }

    function odrediJeloEn(jeloBr){
        switch(jeloBr){
            case "prvo":
                return "spring rolls";
            case "dugo":
                return "pork dumplings";
            case "trece":
                return "terizaki chicken sticks";
            case "cetvrto":
                return "kung pao chicken";
            case "peto":
                return "sweet sour pork";
            case "sesto":
                return "mapo tofu";
            case "sedmo":
                return "mago pudding";
            case "osmo":
                return "sesame icecream";        
        }
        return "mooncake";
    }
    let ocene = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("prosek-")) {
            let jeloBr = key.split("prosek-")[1];   //koje je jelo po redu na jelovniku
            let prosek = parseInt(localStorage.getItem(key));   //prosecna ocena
           
            if (!isNaN(prosek)) {
                ocene.push({ 
                    jeloBr:jeloBr,
                    prosek: prosek 
                });
            } 
        }
    }

    ocene.sort((a, b) => b.prosek - a.prosek); //opadajuce sortiran
    
    let najboljaJelaDiv = document.getElementById("najbolja");
    if (!najboljaJelaDiv) {
        console.error("Element sa id-jem 'najboljaJela' nije pronađen");
        return;
    }

    najboljaJelaDiv.innerHTML = ''; // Očisti prethodni sadržaj

    if (ocene.length === 0) {
        najboljaJelaDiv.innerHTML = '<p>Nema dostupnih ocena.</p>';
        return;
    }

    for (let i = 0; i < Math.min(3, ocene.length); i++) {
        let jeloDiv = document.createElement("div");

        let jezik=localStorage.getItem("language");
        let jeloo;
        if(jezik=="sr"){
            jeloo=odrediJelo(ocene[i].jeloBr);
            jeloDiv.innerHTML = `<h4>Jelo ${jeloo}</h4>
                             <p>Prosecna ocena: ${ocene[i].prosek}</p>`;
        }else{
            jeloo=odrediJeloEn(ocene[i].jeloBr);
            jeloDiv.innerHTML = `<h4>Dish ${jeloo}</h4>
                             <p>Average grade: ${ocene[i].prosek}</p>`;
        }
        
        najboljaJelaDiv.appendChild(jeloDiv);
    }
});
