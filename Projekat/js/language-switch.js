function changeLanguage(language) {
    localStorage.setItem('language', language);
    switchLanguage(language);
}

function switchLanguage(language) {
    const currentUrl = window.location.href;
    if (language === 'en') {
        if (currentUrl.includes('index.html')) {
            window.location.href = 'index_E.html';
        } else if (currentUrl.includes('gallery.html')) {
            window.location.href = 'gallery_E.html';
        } else if (currentUrl.includes('menu.html')) {
            window.location.href = 'menu_E.html';
        } else if (currentUrl.includes('account.html')) {
            window.location.href = 'account_E.html';
        } else if (currentUrl.includes('about.html')) {
            window.location.href = 'about_E.html';
        } else if (currentUrl.includes('spring_rolls.html')) {
            window.location.href = 'spring_rolls_E.html';
        } else if (currentUrl.includes('kung_pao_chicken.html')) {
            window.location.href = 'kung_pao_chicken_E.html';
        } else if (currentUrl.includes('mango_pudding.html')) {
            window.location.href = 'mango_pudding_E.html';
        } else if (currentUrl.includes('mapo_tofu.html')) {
            window.location.href = 'mapo_tofu_E.html';
        } else if (currentUrl.includes('mooncake.html')) {
            window.location.href = 'mooncake_E.html';
        } else if (currentUrl.includes('pork_dumplings.html')) {
            window.location.href = 'pork_dumplings_E.html';
        } else if (currentUrl.includes('sesame_icecream.html')) {
            window.location.href = 'sesame_icecream_E.html';
        } else if (currentUrl.includes('sweet_sour_pork.html')) {
            window.location.href = 'sweet_sour_pork_E.html';
        } else if (currentUrl.includes('teriyaki_chicken_sticks.html')) {
            window.location.href = 'teriyaki_chicken_sticks_E.html';
        }
    } else {
        if (currentUrl.includes('index_E.html')) {
            window.location.href = 'index.html';
        } else if (currentUrl.includes('gallery_E.html')) {
            window.location.href = 'gallery.html';
        } else if (currentUrl.includes('menu_E.html')) {
            window.location.href = 'menu.html';
        } else if (currentUrl.includes('account_E.html')) {
            window.location.href = 'account.html';
        } else if (currentUrl.includes('about_E.html')) {
            window.location.href = 'about.html';
        } else if (currentUrl.includes('spring_rolls_E.html')) {
            window.location.href = 'spring_rolls.html';
        } else if (currentUrl.includes('kung_pao_chicken_E.html')) {
            window.location.href = 'kung_pao_chicken.html';
        } else if (currentUrl.includes('mango_pudding_E.html')) {
            window.location.href = 'mango_pudding.html';
        } else if (currentUrl.includes('mapo_tofu_E.html')) {
            window.location.href = 'mapo_tofu.html';
        } else if (currentUrl.includes('mooncake_E.html')) {
            window.location.href = 'mooncake.html';
        } else if (currentUrl.includes('pork_dumplings_E.html')) {
            window.location.href = 'pork_dumplings.html';
        } else if (currentUrl.includes('sesame_icecream_E.html')) {
            window.location.href = 'sesame_icecream.html';
        } else if (currentUrl.includes('sweet_sour_pork_E.html')) {
            window.location.href = 'sweet_sour_pork.html';
        } else if (currentUrl.includes('teriyaki_chicken_sticks_E.html')) {
            window.location.href = 'teriyaki_chicken_sticks.html';
        }
    }
}

window.onload = function() {
    const currentUrl = window.location.href;
    if (currentUrl.includes('_E')) localStorage.setItem('language', 'en');
    else localStorage.setItem('language', 'sr');
};