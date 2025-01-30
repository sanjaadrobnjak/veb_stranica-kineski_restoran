function sortirajJela() {
    const selectElement = document.getElementById("sortiranje");
    const sortType = selectElement.value; 
    
    const activeMenu = document.querySelector(".w3-container.menu[style='display: block;']");
    
    if (activeMenu) {
      const hrs = activeMenu.querySelectorAll("hr");
      hrs.forEach(line => line.parentNode.removeChild(line));

      const jela = activeMenu.querySelectorAll("h5[data-name]");
      const slike = activeMenu.querySelectorAll("h5[data-name] + a");
      
      const jelaArray = Array.from(jela);
      const slikeArray = Array.from(slike);
      
      const jelaISlike = jelaArray.map((jelo, index) => ({
        naslov: jelo,
        slika: slikeArray[index]
    }));
    
    if (sortType == "opadajuce") {
      jelaISlike.sort((a, b) => b.naslov.dataset.name.localeCompare(a.naslov.dataset.name));
    } else if (sortType == "rastuce") {
      jelaISlike.sort((a, b) => a.naslov.dataset.name.localeCompare(b.naslov.dataset.name));
    }
    
    jela.forEach(jelo => jelo.parentNode.removeChild(jelo));
    slike.forEach(slika => slika.parentNode.removeChild(slika));

    
    jelaISlike.forEach(({ naslov, slika }, index) => {
      activeMenu.appendChild(naslov);
      activeMenu.appendChild(slika);
      if (index < jelaISlike.length - 1) {
        const hr = document.createElement('hr');
        activeMenu.appendChild(hr);
      }
      });
    }
  }
    
  
  function pretraziJelo() {
    let unos = document.getElementById('unosJela').value.trim();
      
    let jela = [
      { naziv: "Prolećne rolnice sa povrćem", link: "food/spring_rolls.html" },
      { naziv: "Gjoze sa svinjetinom", link: "food/pork_dumplings.html" },
      { naziv: "Terijaki pileći ražnjići", link: "food/teriyaki_chicken_sticks.html" },
      { naziv: "Kung pao piletina", link: "food/kung_pao_chicken.html" },
      { naziv: "Slatko kisela svinjetina", link: "food/sweet_sour_pork.html" },
      { naziv: "Mapo tofu", link: "food/mapo_tofu.html" },
      { naziv: "Puding od manga", link: "food/mango_pudding.html" },
      { naziv: "Sladoled od susama", link: "food/sesame_icecream.html" },
      { naziv: "Mesečev kolač", link: "food/mooncake.html" },
      { naziv: "Prolecne rolnice sa povrcem", link: "food/spring_rolls.html" },
      { naziv: "Gjoze sa svinjetinom", link: "food/pork_dumplings.html" },
      { naziv: "Terijaki pileci raznjici", link: "food/teriyaki_chicken_sticks.html" },
      { naziv: "Kung pao piletina", link: "food/kung_pao_chicken.html" },
      { naziv: "Slatko kisela svinjetina", link: "food/sweet_sour_pork.html" },
      { naziv: "Mapo tofu", link: "food/mapo_tofu.html" },
      { naziv: "Puding od manga", link: "food/mango_pudding.html" },
      { naziv: "Sladoled od susama", link: "food/sesame_icecream.html" },
      { naziv: "Mesecev kolac", link: "food/mooncake.html" }
    ];
  
    let pronadjenoJelo = jela.find(jelo => jelo.naziv.toLowerCase() == unos.toLowerCase());
  
    if (pronadjenoJelo) {
      window.location.href = pronadjenoJelo.link;
      return false; 
    } else {
      let rezultatPretrage = document.getElementById('rezultatPretrage');
      rezultatPretrage.textContent = "Jelo '" + unos + "' nije pronađeno.";
      rezultatPretrage.style.color = "red";
      return false; 
    }
  }
  

  function preuzmiJelovnik(){
    const pdfUrl = "menu/jelovnik.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "jelovnik.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  
  function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-dark-grey";
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");
    if (section) {
      openMenu({ currentTarget: document.querySelector(`a[href="javascript:void(0)"][onclick="openMenu(event, '${section}');"]`) }, section);
    } else {
      document.getElementById("myLink").click();
    }
  });
  

  
