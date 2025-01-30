$(document).ready(function(){
    let jezik = localStorage.getItem("language");
    if (isNaN(jezik)) {
        jezik = "sr";
    }

    function ucitajPorudzbine() {
        let porudzbine = [];
        for (let i = 0; i < localStorage.length; i++) {
            let tmp = localStorage.key(i);
            if (tmp.startsWith("porudzbina_")) {
                porudzbine.push(JSON.parse(localStorage.getItem(tmp)));
            }
        }
        
        return porudzbine;
    }

    function sacuvajPorudzbine(porudzbine) {
        let id = localStorage.getItem("id") || 0;
        id = parseInt(id);
        
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.startsWith("porudzbina_")) {
                localStorage.removeItem(key);
                i--; 
            }
        }
    
        porudzbine.forEach((porudzbina, index) => {
            localStorage.setItem('porudzbina_' + index, JSON.stringify(porudzbina));
        });
        
        localStorage.setItem("id", id);
    }    

    let porudzbine = ucitajPorudzbine();
    let tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];

    for (let i = 0; i < porudzbine.length; i++) {
        let vrsta = document.createElement("tr");
        let kolonaBroj = document.createElement("td");
        let kolonaNaziv = document.createElement("td");
        let kolonaPorcija = document.createElement("td");
        let kolonaKolicina = document.createElement("td");
        let kolonaIzmeni = document.createElement("td");
        let kolonaUkloni = document.createElement("td");

        let promeniKolicinu = $('<input type="number" class="promeniKolicinu">').attr('id', 'kolicina'+i).val(porudzbine[i].kolicina);
        let promeniKolicinuu = promeniKolicinu[0];
        
        
        let promeni;
        if(jezik=="sr"){
            promeni = $('<input type="button" value="Izmeni količinu" class="promeniButton">').attr('id', 'promeni'+i);
        }else{
            promeni = $('<input type="button" value="Change quantity" class="promeniButton">').attr('id', 'promeni'+i);
        }
        let promenii = promeni[0];
        let ukloniJelo = $('<input type="checkbox" class="ukloniJelo">').attr('id', 'ukloni'+i);
        let ukloniJeloo = ukloniJelo[0];

        kolonaBroj.textContent = porudzbine[i].broj;
        if(jezik=="sr"){
            kolonaNaziv.textContent=porudzbine[i].nazivSr;
            kolonaPorcija.textContent = porudzbine[i].porcijaSr;
        }else{
            kolonaNaziv.textContent=porudzbine[i].nazivEn;
            kolonaPorcija.textContent = porudzbine[i].porcijaEn;
        }
        kolonaKolicina.appendChild(promeniKolicinuu);
        kolonaIzmeni.appendChild(promenii);
        kolonaUkloni.appendChild(ukloniJeloo);

        vrsta.appendChild(kolonaBroj);
        vrsta.appendChild(kolonaNaziv);
        vrsta.appendChild(kolonaPorcija);
        vrsta.appendChild(kolonaKolicina);
        vrsta.appendChild(kolonaIzmeni);
        vrsta.appendChild(kolonaUkloni);

        tabela.appendChild(vrsta);

        promeni.click(function(){
            porudzbine[i].kolicina=$("#kolicina"+i).val();
            sacuvajPorudzbine(porudzbine);
            if(jezik=="sr"){
                alert("Količina je promenjena");
            }else{
                alert("Quantity has been changed");
            }
        });

    }
    $(".ukloniJelo").click(function(){
        let id = $(this).attr("id").replace("ukloni", "");

        if ($(this).is(':checked')) {
            porudzbine.splice(id, 1);
            sacuvajPorudzbine(porudzbine);
            
            $(this).closest('tr').remove();
            if(jezik="sr"){
                alert("Jelo je uklonjeno iz korpe.");
            }else{
                alert("Dish has been removed");
            }
            
        }
    });

    function ucitajNarudzbine() {
        let narudzbine = [];
        for (let i = 0; i < localStorage.length; i++) {
            let tmp = localStorage.key(i);
            if (tmp.startsWith("narudzbina_")) {
                narudzbine.push(JSON.parse(localStorage.getItem(tmp)));
            }
        }
        return narudzbine;
    }

    function sacuvajNarudzbinu(narudzbina) {
        let id = localStorage.getItem("narudzbina_id");
        if(isNaN(id)){
            id=0;
        }
        localStorage.setItem("narudzbina_" + id, JSON.stringify(narudzbina));
        localStorage.setItem("narudzbina_id", ++id);
    }
    
    
    let jezikk=localStorage.getItem("language");
    $("#finalizuj").click(function(){
        sacuvajNarudzbinu(porudzbine);

        localStorage.removeItem("id");
        sacuvajPorudzbine([]);

        //localStorage.setItem("narudzbina_id", 0);
        
        if(jezikk=="sr"){
            alert("Narudžbina je finalizirana!");
        }else{
            alert("Order has been finalized!");
        }

        location.reload();
    });

    
    let narudzbine = ucitajNarudzbine();
    let narudzbineDiv = document.getElementById("narudzbine");
    for(let index=0; index<narudzbine.length; index++){
        let porudzbinee=narudzbine[index];
        let narudzbinaDiv = document.createElement("div");

        if(jezikk=="sr"){
            narudzbinaDiv.innerHTML = `<h3>Narudžbina ${index + 1}</h3>`;
        }else{
            narudzbinaDiv.innerHTML = `<h3>Order ${index + 1}</h3>`;
        }

        let tabela = document.createElement("table");

        if(jezikk=="sr"){
            tabela.innerHTML = `
                <thead>
                    <tr>
                        <th>Broj</th>
                        <th>Naziv</th>
                        <th>Porcija</th>
                        <th>Količina</th>
                    </tr>
                </thead>
                <tbody></tbody>
            `;
        }else{
            tabela.innerHTML = `
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody></tbody>
            `;
        }
        
        let tbody = tabela.getElementsByTagName('tbody')[0];
        for(let j=0; j<porudzbinee.length; j++){
            let porudzbinaa=porudzbinee[j];
            let vrsta = document.createElement("tr");

            let kolonaBroj = document.createElement("td");
            let kolonaNaziv = document.createElement("td");
            let kolonaPorcija = document.createElement("td");
            let kolonaKolicina = document.createElement("td");

            kolonaBroj.textContent = porudzbinaa.broj;

            if(jezikk=="sr"){
                kolonaNaziv.textContent = porudzbinaa.nazivSr; 
                kolonaPorcija.textContent = porudzbinaa.porcijaSr; 
            }else{
                kolonaNaziv.textContent = porudzbinaa.nazivEn; 
                kolonaPorcija.textContent = porudzbinaa.porcijaEn; 
            }
            
            kolonaKolicina.textContent = porudzbinaa.kolicina;

            vrsta.appendChild(kolonaBroj);
            vrsta.appendChild(kolonaNaziv);
            vrsta.appendChild(kolonaPorcija);
            vrsta.appendChild(kolonaKolicina);

            tbody.appendChild(vrsta);
        }
        narudzbinaDiv.appendChild(tabela);
        narudzbineDiv.appendChild(narudzbinaDiv);

    }

    
});
