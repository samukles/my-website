// Language translations
const translations = {
    fi: {
        home: 'Koti',
        menu: 'Menu',
        lunch: 'Lounas',
        contact: 'Yhteystiedot',
        welcome: 'Tervetuloa Thai Kitcheniin',
        welcomeText: 'Autenttista thaimaalaista ruokaa Turussa',
        lunchHours: 'Lounasbuffet',
        lunchTime: 'Ti-Pe 10:30-13:00',
        lunchPrice: 'Lounaan hinta 12,5€',
        lunchIncludes: 'Lounaaseen kuuluu salaattipöytä, pääruokia sekä jälkiruoka ja kahvi.',
        lunchType: 'Buffet-tyylinen lounas',
        address: 'Osoite',
        openingHours: 'Aukioloajat',
        contact: 'Yhteystiedot',
        all: 'Kaikki',
        starters: 'Alkuruoat',
        curries: 'Curryt',
        wok: 'Wok',
        fish: 'Kalat',
        vegetarian: 'Kasvis',
        others: 'Muut',
        desserts: 'Jälkiruoat',
        portions: 'kpl',
        starter: 'alkuruoka',
        main: 'pääruoka',
        glutenFree: 'Gluteeniton',
        vegan: 'Vegaaninen',
        veganOnRequest: 'Vegaaninen pyydettäessä',
        dietaryInfo: 'Ruokavaliotiedot',
        tofu: 'Tofu',
        chicken: 'Kana',
        pork: 'Possu',
        beef: 'Härkä',
        prawns: 'Katkarapu',
        duck: 'Ankka',
        monday: 'Ma: Suljettu',
        tueFri: 'Ti-Pe: 10:30-19:00',
        satSun: 'La-Su: 12:00-20:00'
    },
    en: {
        home: 'Home',
        menu: 'Menu',
        lunch: 'Lunch',
        contact: 'Contact',
        welcome: 'Welcome to Thai Kitchen',
        welcomeText: 'Authentic Thai cuisine in Turku',
        lunchHours: 'Lunch Hours',
        lunchTime: 'Tue-Fri 10:30-13:00',
        lunchPrice: 'Price: 12,50€',
        lunchIncludes: 'Includes: Main dishes, rice, various salads, fruits, coffee and dessert',
        lunchType: 'Buffet-style lunch',
        address: 'Address',
        openingHours: 'Opening Hours',
        contact: 'Contact',
        all: 'All',
        starters: 'Starters',
        curries: 'Curries',
        wok: 'Wok',
        fish: 'Fish',
        vegetarian: 'Vegetarian',
        others: 'Others',
        desserts: 'Desserts',
        portions: 'pcs',
        starter: 'starter',
        main: 'main course',
        glutenFree: 'Gluten Free',
        vegan: 'Vegan',
        veganOnRequest: 'Vegan on request',
        dietaryInfo: 'Dietary Information',
        tofu: 'Tofu',
        chicken: 'Chicken',
        pork: 'Pork',
        beef: 'Beef',
        prawns: 'Prawns',
        duck: 'Duck',
        monday: 'Mon: Closed',
        tueFri: 'Tue-Fri: 10:30-19:00',
        satSun: 'Sat-Sun: 12:00-20:00'
    }
};

// Menu translations
const menuTranslations = {
    fi: {
        'Por pia Tod': {
            name: 'Por pia Tod',
            description: 'Kasviskevätkääryleet sweet chili -kastikkeen kera'
        },
        'Satay Kai': {
            name: 'Satay Kai',
            description: 'Grillatut kanavartaat pähkinäkastikkeella ja etikkavihanneksilla'
        },
        'Kung Tod': {
            name: 'Kung Tod',
            description: 'Friteerattuja jättikatkarapuja luumu- sekä sweet chili -kastikkeen kera'
        },
        'Som tum': {
            name: 'Som tum 🌶️🌶️🌶️',
            description: 'Vihreä tulinen papaijasalaatti (sis. maapähkinöitä)'
        },
        'Tom yam kung': {
            name: 'Tom yam kung 🌶️🌶️',
            description: 'Mausteinen jättikatkarapukeitto herkkusienten sekä tomaatin kera'
        },
        'Kaeng khua sapparod': {
            name: 'Kaeng khua sapparod 🌶️',
            description: 'Punainen curry valitsemallasi täytteellä, ananaksella ja muilla kasviksilla kookosmaidossa'
        },
        'Kaeng phed ped yang': {
            name: 'Kaeng phed ped yang 🌶️',
            description: 'Punainen curry ankalla sekä laajalla kirjolla kasviksia'
        },
        'Kaeng khiao wan': {
            name: 'Kaeng khiao wan 🌶️🌶️',
            description: 'Vihreä curry valitsemallasi täytteellä sekä kasviksilla'
        },
        'Kaeng pha naeng': {
            name: 'Kaeng pha naeng 🌶️',
            description: 'Phanang curry valitsemallasi täytteellä, pavuilla, sitruunalehdellä sekä muilla kasviksilla'
        },
        'Massaman curry': {
            name: 'Massaman curry 🌶️',
            description: 'Massaman curry valitsemallasi täytteellä, perunalla, sipulilla sekä maapähkinöillä'
        },
        'Kaeng ka ri': {
            name: 'Kaeng ka ri 🌶️',
            description: 'Keltainen curry valitsemallasi täytteellä, kasviksilla sekä paahdetulla sipulilla'
        },
        'Phat kra phao': {
            name: 'Phat kra phao 🌶️🌶️🌶️',
            description: 'Tulinen ruoka, johon kuuluu basilikaa, valkosipulia sekä chiliä'
        },
        'Phat kra thiam phrik thai': {
            name: 'Phat kra thiam phrik thai 🌶️',
            description: 'Pippurilla ja valkosipulilla maustettu valitsemasi täyte kasvisten kanssa'
        },
        'Phat khing': {
            name: 'Phat khing',
            description: 'Tuoretta inkivääriä ja muita kasviksia valitsemallasi täytteellä'
        },
        'Phat priao wan': {
            name: 'Phat priao wan',
            description: 'Tuoreita kasviksia valitsemallasi täytteellä hapanimelä-kastikkeessa'
        },
        'Phat phong kra ri': {
            name: 'Phat phong kra ri',
            description: 'Valitsemasi täyte sipulilla sekä muilla kasviksilla keltacurryjauheessa'
        },
        'Phat met ma muang him ma phan': {
            name: 'Phat met ma muang him ma phan 🌶️',
            description: 'Paistettu täyte kasviksilla sekä cashew-pähkinöillä'
        },
        'Phat se io': {
            name: 'Phat se io',
            description: 'Paksu riisinuudeli valitsemallasi täytteellä kasviksilla sekä kananmunalla'
        },
        'Phat kee mao': {
            name: 'Phat kee mao 🌶️🌶️🌶️',
            description: 'Tulinen ja paksu riisinuudeli valkosipulin, chilin, papujen ja bambun kanssa'
        },
        'Phat thai': {
            name: 'Phat thai',
            description: 'Paistettu riisinuudeli valitsemallasi täytteellä, kasviksilla, kananmunalla sekä murskattuilla maapähkinöillä'
        },
        'Khao phat': {
            name: 'Khao phat',
            description: 'Paistettua riisiä kasviksilla, kananmunalla ja valitsemallasi täytteellä'
        },
        'Tod-mun pla-krai': {
            name: 'Tod-mun pla-krai 🌶️',
            description: 'Kalakakkuja thaimaalaisittain. Kalakakut tarjoillaan pähkinäisen sweet chili -kastikkeen kanssa'
        },
        'Pla sam rot': {
            name: 'Pla sam rot 🌶️🌶️',
            description: 'Uppopaistettua kalafileetä kasvisten kanssa maustetussa tamariini-kastikkeessa'
        },
        'Choo chee pla tod': {
            name: 'Choo chee pla tod 🌶️🌶️',
            description: 'Uppopaistettua kalafileetä kasvisten ja sitruunalehden kanssa currykastikkeessa'
        },
        'Phat thai phak': {
            name: 'Phat thai phak',
            description: 'Kasvisversio phat thaista. Annokseen tulee paistettua kananmunaa, riisinuudelia, pähkinää ja tuoreita kasviksia'
        },
        'Khao phat met ma muang': {
            name: 'Khao phat met ma muang',
            description: 'Paistettu riisi kasviksilla. Proteiinin lähteenä toimii kananmuna sekä cashew-pähkinät'
        },
        'Phat phak ruam': {
            name: 'Phat phak ruam',
            description: 'Wokkipannussa paistettuja vihanneksia thaimaalaisittain'
        },
        'Tom kha': {
            name: 'Tom kha 🌶️🌶️',
            description: 'Mausteinen keitto kookosmaidolla, sienillä, tomaatilla, sitruunalehdellä, galangalla sekä valitsemallasi täytteellä'
        },
        'Kor moo yang': {
            name: 'Kor moo yang 🌶️🌶️',
            description: 'Paistettu possunniska tulisen kastikkeen kera'
        },
        'Yam woon sen kung': {
            name: 'Yam woon sen kung 🌶️🌶️',
            description: 'Tulinen jättikatkarapu lasinuudelisalaatti (tarjoillaan kylmänä)'
        },
        'Lap kai / mu': {
            name: 'Lap kai / mu 🌶️🌶️',
            description: 'Mausteinen jauhettu kanan- tai sianlihasalaatti'
        },
        'Kai Tod': {
            name: 'Kai Tod',
            description: 'Friteerattua kanaa sweet chili -kastikkeen kera'
        },
        'Ro ti': {
            name: 'Ro ti',
            description: 'Pannukakkua ja vaniljajäätelöä thaimaalaisittain'
        },
        'Kluai Tod': {
            name: 'Kluai Tod',
            description: 'Friteerattua banaania vaniljajäätelön kera'
        }
    },
    en: {
        'Por pia Tod': {
            name: 'Por Pia Tod',
            description: 'Vegetable spring rolls with sweet chili sauce'
        },
        'Satay Kai': {
            name: 'Satay Kai',
            description: 'Grilled chicken skewers with peanut sauce and pickled vegetables'
        },
        'Kung Tod': {
            name: 'Kung Tod',
            description: 'Deep-fried king prawns with plum and sweet chili sauce'
        },
        'Som tum': {
            name: 'Som Tum 🌶️🌶️🌶️',
            description: 'Spicy green papaya salad (contains peanuts)'
        },
        'Tom yam kung': {
            name: 'Tom Yam Kung 🌶️🌶️',
            description: 'Spicy prawn soup with mushrooms and tomatoes'
        },
        'Kaeng khua sapparod': {
            name: 'Kaeng Khua Sapparod 🌶️',
            description: 'Red curry with your choice of protein, pineapple and mixed vegetables in coconut milk'
        },
        'Kaeng phed ped yang': {
            name: 'Kaeng Phed Ped Yang 🌶️',
            description: 'Red curry with duck and a variety of fresh vegetables'
        },
        'Kaeng khiao wan': {
            name: 'Kaeng Khiao Wan 🌶️🌶️',
            description: 'Green curry with your choice of protein and mixed vegetables'
        },
        'Kaeng pha naeng': {
            name: 'Kaeng Pha Naeng 🌶️',
            description: 'Phanang curry with your choice of protein, green beans, kaffir lime leaves and mixed vegetables'
        },
        'Massaman curry': {
            name: 'Massaman Curry 🌶️',
            description: 'Massaman curry with your choice of protein, potatoes, onions and peanuts'
        },
        'Kaeng ka ri': {
            name: 'Kaeng Ka Ri 🌶️',
            description: 'Yellow curry with your choice of protein and mixed vegetables'
        },
        'Phat kra phao': {
            name: 'Phat Kra Phao 🌶️🌶️🌶️',
            description: 'Spicy dish with basil, garlic, and chili'
        },
        'Phat kra thiam phrik thai': {
            name: 'Phat Kra Thiam Phrik Thai 🌶️',
            description: 'Your choice of filling with vegetables in pepper and garlic sauce'
        },
        'Phat khing': {
            name: 'Phat Khing',
            description: 'Fresh ginger and mixed vegetables with your choice of filling'
        },
        'Phat priao wan': {
            name: 'Phat Priao Wan',
            description: 'Fresh vegetables with your choice of filling in sweet and sour sauce'
        },
        'Phat phong kra ri': {
            name: 'Phat Phong Kra Ri',
            description: 'Your choice of filling with onions and mixed vegetables in yellow curry powder'
        },
        'Phat met ma muang him ma phan': {
            name: 'Phat Met Ma Muang Him Ma Phan 🌶️',
            description: 'Stir-fried filling with vegetables and cashew nuts'
        },
        'Phat se io': {
            name: 'Phat Se Io',
            description: 'Thick rice noodles with your choice of filling, vegetables and egg'
        },
        'Phat kee mao': {
            name: 'Phat Kee Mao 🌶️🌶️🌶️',
            description: 'Spicy thick rice noodles with garlic, chili, beans, and bamboo'
        },
        'Phat thai': {
            name: 'Phat Thai',
            description: 'Stir-fried rice noodles with your choice of filling, vegetables, egg and crushed peanuts'
        },
        'Khao phat': {
            name: 'Khao Phat',
            description: 'Fried rice with vegetables, egg, and your choice of filling'
        },
        'Tod-mun pla-krai': {
            name: 'Tod-Mun Pla-Krai 🌶️',
            description: 'Thai-style fish cakes served with nutty sweet chili sauce'
        },
        'Pla sam rot': {
            name: 'Pla Sam Rot 🌶️🌶️',
            description: 'Deep-fried fish fillet with vegetables in spiced tamarind sauce'
        },
        'Choo chee pla tod': {
            name: 'Choo Chee Pla Tod 🌶️🌶️',
            description: 'Deep-fried fish fillet with vegetables and kaffir lime leaves in curry sauce'
        },
        'Phat thai phak': {
            name: 'Phat Thai Phak',
            description: 'Vegetarian version of Phat Thai with fried egg, rice noodles, peanuts, and fresh vegetables'
        },
        'Khao phat met ma muang': {
            name: 'Khao Phat Met Ma Muang',
            description: 'Fried rice with vegetables, protein from egg and cashew nuts'
        },
        'Phat phak ruam': {
            name: 'Phat Phak Ruam',
            description: 'Thai-style stir-fried mixed vegetables'
        },
        'Tom kha': {
            name: 'Tom Kha 🌶️🌶️',
            description: 'Spicy soup with coconut milk, mushrooms, tomato, kaffir lime leaves, galangal and your choice of filling'
        },
        'Kor moo yang': {
            name: 'Kor Moo Yang 🌶️🌶️',
            description: 'Grilled pork neck with spicy sauce'
        },
        'Yam woon sen kung': {
            name: 'Yam Woon Sen Kung 🌶️🌶️',
            description: 'Spicy glass noodle salad with king prawns (served cold)'
        },
        'Lap kai / mu': {
            name: 'Lap Kai / Mu 🌶️🌶️',
            description: 'Spicy minced chicken or pork salad'
        },
        'Kai Tod': {
            name: 'Kai Tod',
            description: 'Deep-fried chicken with sweet chili sauce'
        },
        'Ro ti': {
            name: 'Ro Ti',
            description: 'Thai-style pancake with vanilla ice cream'
        },
        'Kluai Tod': {
            name: 'Kluai Tod',
            description: 'Deep-fried banana with vanilla ice cream'
        }
    }
};

// Language switching
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listener to language switch link
    const langSwitch = document.querySelector('.lang-switch');
    langSwitch.addEventListener('click', (e) => {
        e.preventDefault();
        const newLang = langSwitch.dataset.lang;
        // Store the selected language in localStorage
        localStorage.setItem('selectedLanguage', newLang);
        // Update the language switch text and data attribute
        if (newLang === 'en') {
            langSwitch.textContent = 'Suomeksi';
            langSwitch.dataset.lang = 'fi';
        } else {
            langSwitch.textContent = 'In English';
            langSwitch.dataset.lang = 'en';
        }
        // Update the page content
        updateLanguage(newLang);
    });

    // Apply the stored language on page load
    const storedLang = localStorage.getItem('selectedLanguage') || 'fi';
    document.documentElement.lang = storedLang;
    
    // Update language switch text based on current language
    if (storedLang === 'en') {
        langSwitch.textContent = 'Suomeksi';
        langSwitch.dataset.lang = 'fi';
    }

    // Update all content based on the stored language
    updateLanguage(storedLang);

    // Initialize menu with the current language
    populateMenu();
});

// Function to update all content based on language
function updateLanguage(lang) {
    document.documentElement.lang = lang;
    
    // Update all text elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.dataset.langKey;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Repopulate the entire menu section with the new language
    populateMenu();

    // Update portions text
    document.querySelectorAll('.portions').forEach(element => {
        const text = element.textContent;
        if (text.includes('kpl')) {
            element.textContent = text.replace('kpl', translations[lang].portions);
        } else if (text.includes('alkuruoka') || text.includes('starter')) {
            element.textContent = text
                .replace('alkuruoka', translations[lang].starter)
                .replace('pääruoka', translations[lang].main)
                .replace('starter', translations[lang].starter)
                .replace('main course', translations[lang].main);
        }
    });

    // Update protein options
    document.querySelectorAll('.protein-options span').forEach(element => {
        const text = element.textContent;
        if (text.includes('/')) {
            const parts = text.split(':');
            if (parts.length === 2) {
                const proteins = parts[0].split('/');
                const price = parts[1].trim();
                const translatedProteins = proteins.map(protein => {
                    const trimmedProtein = protein.trim();
                    return translations[lang][trimmedProtein.toLowerCase()] || trimmedProtein;
                });
                element.textContent = `${translatedProteins.join('/')}:${price}`;
            }
        }
    });
}

// Function to create menu item HTML
function createMenuItemHTML(item) {
    const currentLang = document.documentElement.lang || 'fi';
    const translation = menuTranslations[currentLang] && menuTranslations[currentLang][item.name] ? 
                       menuTranslations[currentLang][item.name] : 
                       { name: item.name, description: item.description };
    const t = translations[currentLang];
    const glutenFreeSymbol = currentLang === 'fi' ? 'G' : 'GF';

    let priceHTML = '';
    if (item.proteinOptions) {
        if (item.name === "Tom kha") {
            priceHTML = `
                <div class="protein-options">
                    <span>${t.chicken}: ${item.proteinOptions.chicken}€</span>
                    <span>${t.prawns}: ${item.proteinOptions.prawns}€</span>
                </div>
            `;
        } else {
            priceHTML = `
                <div class="protein-options">
                    <span>${t.tofu}/${t.chicken}/${t.pork}: ${item.proteinOptions.tofu}€</span>
                    <span>${t.beef}: ${item.proteinOptions.beef}€</span>
                    <span>${t.prawns}/${t.duck}: ${item.proteinOptions.prawns}€</span>
                </div>
            `;
        }
    } else {
        let priceDisplay = '';
        let portionsDisplay = '';
        if (item.portions) {
            if (item.portions.includes('kpl')) {
                const prices = item.price.split('/').map(p => p.trim().replace('€', '')).join(' / ');
                const portions = item.portions.split('/').map(p => p.trim().replace('kpl', '')).join(' / ');
                priceDisplay = `${prices} €`;
                portionsDisplay = `${portions} ${currentLang === 'fi' ? 'kpl' : 'pcs'}`;
            } else if (item.portions.includes('alku-') || item.portions.includes('pääruoka')) {
                portionsDisplay = `${t.starter} / ${t.main}`;
                priceDisplay = item.price;
            } else {
                portionsDisplay = item.portions;
                priceDisplay = `${item.price}€`;
            }
        } else {
            priceDisplay = `${item.price}€`;
        }
        priceHTML = `
            <div class="price-container">
                <div class="price">${priceDisplay}</div>
                ${portionsDisplay ? `<div class="portions">${portionsDisplay}</div>` : ''}
            </div>
        `;
    }

    let dietaryHTML = '';
    if (item.glutenFree || item.vegan) {
        dietaryHTML = '<div class="dietary-icons">';
        if (item.glutenFree) {
            dietaryHTML += `<span class="dietary-icon gluten-free" title="${t.glutenFree}">${glutenFreeSymbol}</span>`;
        }
        if (item.vegan) {
            dietaryHTML += `<span class="dietary-icon vegan" title="${t.veganOnRequest}">V*</span>`;
        }
        dietaryHTML += '</div>';
    }

    return `
        <div class="menu-item">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${translation.name}">
            </div>
            <div class="menu-item-content">
                <h3 data-original-name="${item.name}">${translation.name}</h3>
                <p class="description">${translation.description}</p>
                ${priceHTML}
                ${dietaryHTML}
            </div>
        </div>
    `;
}

// Function to populate menu section
function populateMenu() {
    const currentLang = document.documentElement.lang || 'fi';
    const t = translations[currentLang];
    const menuSection = document.querySelector('.menu');
    
    // Clear existing content
    menuSection.innerHTML = '';
    
    // Create menu container
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    
    // Create main content area
    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';
    
    // Create categories
    const categoriesDiv = document.createElement('div');
    categoriesDiv.className = 'menu-categories';
    const categories = ['all', 'starters', 'curries', 'wok', 'fish', 'vegetarian', 'others', 'desserts'];
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.dataset.category = category;
        button.dataset.langKey = category;
        button.textContent = t[category];
        button.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            showCategory(category);
        });
        categoriesDiv.appendChild(button);
    });
    mainContent.appendChild(categoriesDiv);
    
    // Create menu items container
    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.className = 'menu-items';
    mainContent.appendChild(menuItemsDiv);
    
    menuContainer.appendChild(mainContent);
    menuSection.appendChild(menuContainer);
    
    // Show all items initially
    document.querySelector('.category-btn[data-category="all"]').classList.add('active');
    showCategory('all');
    
    function showCategory(category) {
        menuItemsDiv.innerHTML = '';
        if (category === 'all') {
            Object.values(menuData).forEach(categoryItems => {
                categoryItems.forEach(item => {
                    menuItemsDiv.innerHTML += createMenuItemHTML(item);
                });
            });
        } else {
            const items = menuData[category] || [];
            items.forEach(item => {
                menuItemsDiv.innerHTML += createMenuItemHTML(item);
            });
        }
    }
}

// Image gallery modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Sample gallery data - replace with actual images
const galleryData = [
    // More images can be added here as they become available
];

function createGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
        galleryItem.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = item.src;
            modalImg.alt = item.alt;
        });
        galleryGrid.appendChild(galleryItem);
    });
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize gallery
createGallery();

// Header scroll behavior
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 100; // Minimum scroll amount before hiding header

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Scrolling down
        navbar.classList.add('hide');
    } else {
        // Scrolling up
        navbar.classList.remove('hide');
    }
    
    lastScrollTop = scrollTop;
});

// Menu data structure
const menuData = {
    starters: [
        {
            name: "Por pia Tod",
            description: "Kasviskevätkääryleet sweet chili -kastikkeen kera",
            price: "7 / 10 / 13",
            portions: "2 kpl / 4 kpl / 6 kpl",
            image: "images/menu/por-pia-tod.jpg",
            glutenFree: false,
            vegan: false
        },
        {
            name: "Satay Kai",
            description: "Grillatut kanavartaat pähkinäkastikkeella ja etikkavihanneksilla",
            price: "8 / 11 / 14",
            portions: "2 kpl / 4 kpl / 6 kpl",
            image: "images/menu/satay-kai.jpg",
            glutenFree: true,
            vegan: false
        },
        {
            name: "Kung Tod",
            description: "Friteerattuja jättikatkarapuja luumu- sekä sweet chili -kastikkeen kera",
            price: "8 / 19",
            portions: "5 kpl / 13 kpl",
            image: "images/menu/kung-tod.jpg",
            glutenFree: false,
            vegan: false
        },
        {
            name: "Som tum",
            description: "Vihreä tulinen papaijasalaatti (sis. maapähkinöitä)",
            price: "9 / 17",
            portions: "alku- pääruoka",
            image: "images/menu/som-tum.jpg",
            glutenFree: true,
            vegan: true
        },
        {
            name: "Tom yam kung",
            description: "Mausteinen jättikatkarapukeitto herkkusienten sekä tomaatin kera",
            price: "9 / 17",
            portions: "alku- pääruoka",
            image: "images/menu/tom-yam-kung.jpg",
            glutenFree: true,
            vegan: false
        }
    ],
    curries: [
        {
            name: "Kaeng khua sapparod",
            description: "Punainen curry ananaksella ja muilla kasviksilla kookosmaidossa",
            price: "15 / 16 / 19",
            proteinOptions: {
                tofu: 15,
                chicken: 15,
                pork: 15,
                beef: 16,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/kaeng-khua-sapparod.jpg",
            glutenFree: true,
            vegan: true,
            veganNote: true
        },
        {
            name: "Kaeng phed ped yang",
            description: "Punainen curry laajalla kirjolla kasviksia sekä ankalla",
            price: "19",
            image: "images/menu/kaeng-phed-ped-yang.jpg",
            glutenFree: true,
            vegan: false
        },
        {
            name: "Kaeng khiao wan",
            description: "Vihreä curry kasviksilla ja valitsemallasi täytteellä",
            price: "15 / 16 / 19",
            proteinOptions: {
                tofu: 15,
                chicken: 15,
                pork: 15,
                beef: 16,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/kaeng-khiao-wan.jpg",
            glutenFree: true,
            vegan: true,
            veganNote: true
        },
        {
            name: "Kaeng pha naeng",
            description: "Phanang curry pavuilla sekä sitruunalehdellä",
            price: "15 / 16 / 19",
            proteinOptions: {
                tofu: 15,
                chicken: 15,
                pork: 15,
                beef: 16,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/kaeng-pha-naeng.jpg",
            glutenFree: true,
            vegan: true,
            veganNote: true
        },
        {
            name: "Massaman curry",
            description: "Massaman curry tarjoaa miedon täyteläisen maun",
            price: "15 / 16 / 19",
            proteinOptions: {
                tofu: 15,
                chicken: 15,
                pork: 15,
                beef: 16,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/massaman-curry.jpg",
            glutenFree: true,
            vegan: true,
            veganNote: true
        },
        {
            name: "Kaeng ka ri",
            description: "Keltainen mieto curry",
            price: "15 / 16 / 19",
            proteinOptions: {
                tofu: 15,
                chicken: 15,
                pork: 15,
                beef: 16,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/kaeng-ka-ri.jpg",
            glutenFree: true,
            vegan: true,
            veganNote: true
        }
    ],
    wok: [
        {
            name: "Phat kra phao",
            description: "Tulinen ruoka, johon kuuluu basilikaa, valkosipulia sekä chiliä",
            price: "15 / 16 / 19",
            proteinOptions: {
                tofu: 15,
                chicken: 15,
                pork: 15,
                beef: 16,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/phat-kra-phao.jpg",
            glutenFree: true,
            vegan: true,
            veganNote: true
        },
        {
            name: "Phat kra thiam phrik thai",
            description: "Pippurilla ja valkosipulilla maustettu valitsemasi täyte kasvisten kanssa",
            price: "15 / 16 / 19",
            proteinOptions: {
                tofu: 15,
                chicken: 15,
                pork: 15,
                beef: 16,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/phat-kra-thiam-phrik-thai.jpg",
            glutenFree: true,
            vegan: true,
            veganNote: true
        },
        {
            name: "Phat khing",
            description: "Tuoretta inkivääriä ja muita kasviksia valitsemallasi täytteellä",
            price: "16,5 / 17,5 / 19",
            proteinOptions: {
                tofu: 16.5,
                chicken: 16.5,
                pork: 16.5,
                beef: 17.5,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/phat-khing.jpg",
            glutenFree: true,
            vegan: true,
            veganNote: true
        },
        {
            name: "Phat priao wan",
            description: "Tuoreita kasviksia valitsemallasi täytteellä hapanimelä-kastikkeessa",
            price: "16,5 / 17,5 / 19",
            proteinOptions: {
                tofu: 16.5,
                chicken: 16.5,
                pork: 16.5,
                beef: 17.5,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/phat-priao-wan.jpg",
            glutenFree: true,
            vegan: true,
            veganNote: true
        },
        {
            name: "Phat phong kra ri",
            description: "Valitsemasi täyte sipulilla sekä muilla kasviksilla keltacurryjauheessa",
            price: "16,5 / 17,5 / 19",
            proteinOptions: {
                tofu: 16.5,
                chicken: 16.5,
                pork: 16.5,
                beef: 17.5,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/phat-phong-kra-ri.jpg",
            glutenFree: true,
            vegan: true,
            veganNote: true
        },
        {
            name: "Phat met ma muang him ma phan",
            description: "Paistettu täyte kasviksilla sekä cashew-pähkinöillä",
            price: "16,5 / 17,5 / 19",
            proteinOptions: {
                tofu: 16.5,
                chicken: 16.5,
                pork: 16.5,
                beef: 17.5,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/phat-met-ma-muang.jpg",
            glutenFree: true,
            vegan: true,
            veganNote: true
        },
        {
            name: "Phat se io",
            description: "Paksu riisinuudeli valitsemallasi täytteellä kasviksilla sekä kananmunalla",
            price: "15 / 16 / 19",
            proteinOptions: {
                tofu: 15,
                chicken: 15,
                pork: 15,
                beef: 16,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/phat-se-io.jpg",
            glutenFree: false,
            vegan: false
        },
        {
            name: "Phat kee mao",
            description: "Tulinen ja paksu riisinuudeli valkosipulin, chilin, papujen ja bambun kanssa",
            price: "15 / 16 / 19",
            proteinOptions: {
                tofu: 15,
                chicken: 15,
                pork: 15,
                beef: 16,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/phat-kee-mao.jpg",
            glutenFree: false,
            vegan: false
        },
        {
            name: "Phat thai",
            description: "Paistettu riisinuudeli, johon lisätään tuoreita kasviksia sekä murskattua pähkinää",
            price: "15 / 16 / 19",
            proteinOptions: {
                tofu: 15,
                chicken: 15,
                pork: 15,
                beef: 16,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/phat-thai.jpg",
            glutenFree: false,
            vegan: false
        },
        {
            name: "Khao phat",
            description: "Paistettua riisiä kasviksilla, kananmunalla ja valitsemallasi täytteellä",
            price: "15 / 16 / 19",
            proteinOptions: {
                tofu: 15,
                chicken: 15,
                pork: 15,
                beef: 16,
                prawns: 19,
                duck: 19
            },
            image: "images/menu/khao-phat.jpg",
            glutenFree: true,
            vegan: false
        }
    ],
    fish: [
        {
            name: "Tod-mun pla-krai",
            description: "Kalakakkuja thaimaalaisittain. Kalakakut tarjoillaan pähkinäisen sweet chili -kastikkeen kanssa",
            price: "19",
            image: "images/menu/tod-mun-pla-krai.jpg",
            glutenFree: true,
            vegan: false
        },
        {
            name: "Pla sam rot",
            description: "Uppopaistettua kalafileetä kasvisten kanssa maustetussa tamariini-kastikkeessa",
            price: "19",
            image: "images/menu/pla-sam-rot.jpg",
            glutenFree: false,
            vegan: false
        },
        {
            name: "Choo chee pla tod",
            description: "Uppopaistettua kalafileetä kasvisten ja sitruunalehden kanssa currykastikkeessa",
            price: "19",
            image: "images/menu/choo-chee-pla-tod.jpg",
            glutenFree: false,
            vegan: false
        }
    ],
    vegetarian: [
        {
            name: "Phat thai phak",
            description: "Kasvisversio phat thaista. Annokseen tulee paistettua kananmunaa, riisinuudelia, pähkinää ja tuoreita kasviksia",
            price: "14",
            image: "images/menu/phat-thai-phak.jpg",
            glutenFree: false,
            vegan: false
        },
        {
            name: "Khao phat met ma muang",
            description: "Paistettu riisi kasviksilla. Proteiinin lähteenä toimii kananmuna sekä cashew-pähkinät",
            price: "15",
            image: "images/menu/khao-phat-met-ma-muang.jpg",
            glutenFree: true,
            vegan: false
        },
        {
            name: "Phat phak ruam",
            description: "Wokkipannussa paistettuja vihanneksia thaimaalaisittain",
            price: "14",
            image: "images/menu/phat-phak-ruam.jpg",
            glutenFree: true,
            vegan: true
        }
    ],
    others: [
        {
            name: "Tom kha",
            description: "Mausteinen keitto kookosmaidolla, sienillä, tomaatilla, sitruunalehdellä, galangalla sekä valitsemallasi täytteellä",
            price: "15 / 19",
            proteinOptions: {
                chicken: 15,
                prawns: 19
            },
            image: "images/menu/tom-kha.jpg",
            glutenFree: true,
            vegan: false
        },
        {
            name: "Kor moo yang",
            description: "Paistettu possunniska tulisen kastikkeen kera",
            price: "15",
            image: "images/menu/kor-moo-yang.jpg",
            glutenFree: true,
            vegan: false
        },
        {
            name: "Yam woon sen kung",
            description: "Tulinen jättikatkarapu lasinuudelisalaatti (tarjoillaan kylmänä)",
            price: "19",
            image: "images/menu/yam-woon-sen-kung.jpg",
            glutenFree: false,
            vegan: false
        },
        {
            name: "Lap kai / mu",
            description: "Mausteinen jauhettu kanan- tai sianlihasalaatti",
            price: "15",
            image: "images/menu/lap-kai-mu.jpg",
            glutenFree: true,
            vegan: false
        },
        {
            name: "Kai Tod",
            description: "Friteerattua kanaa sweet chili -kastikkeen kera",
            price: "9",
            image: "images/menu/kai-tod.jpg",
            glutenFree: false,
            vegan: false
        }
    ],
    desserts: [
        {
            name: "Ro ti",
            description: "Pannukakkua ja vaniljajäätelöä thaimaalaisittain",
            price: "8",
            image: "images/menu/ro-ti.jpg",
            glutenFree: false,
            vegan: false
        },
        {
            name: "Kluai Tod",
            description: "Friteerattua banaania vaniljajäätelön kera",
            price: "8",
            image: "images/menu/kluai-tod.jpg",
            glutenFree: false,
            vegan: false
        }
    ]
};

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Update menu category buttons
document.querySelectorAll('.category-btn').forEach(button => {
    const key = button.dataset.category;
    button.textContent = translations[document.documentElement.lang || 'fi'][key] || key;
}); 