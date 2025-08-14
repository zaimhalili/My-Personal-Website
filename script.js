window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

window.addEventListener("load", () => {
    document.querySelectorAll('.animated').forEach((el) => {
        el.classList.remove('animated');
        void el.offsetWidth; // Trigger reflow
        el.classList.add('animated');
    });
});


const translations = {
    ENG: {
        language: "ENG",
        contact_text: "CONTACT",
        home_title: "Digital Designer & Webflow Developer",
        home_description: "I'm Zaim Halili, a digital designer and Webflow developer — I partner with brands worldwide to build high-converting, goal-oriented websites that boost engagement, drive growth, and deliver measurable results.",
        cases: ["CASE STUDY 01", "CASE STUDY 02", "CASE STUDY 03"],
        case_titles: ["Find The Color", "My Bookshelf", "Life Is Temporary"],
        case_descriptions: [
            "A color palette generator where you choose or randomize a hex code; colors appear in bars with displayed hex values.",
            "Add books you've read, write comments, and view summaries, main characters, page count, covers, and fan art of key scenes.",
            "Daily gratitude journal: write three reasons you're grateful for someone, upload an image, and view entries as visual memory blocks."
        ],
        view_case: "View Case Study",
        about_id: "ABOUT",
        personal_description: "Builder at heart, deep into design, tech, and the web. Obsessed with clean UI, smart UX, and bold results.\n\nOver 2 years crafting digital experiences — efficient, structured, and impact-first. I design with clarity, develop with intent, and keep users and business goals at the center.\n\nBased in Italy, working globally.",
        final_hook: "Looking for a Webflow Developer?",
        get_in_touch_text: "GET IN TOUCH"
    },
    IT: {
        language: "IT",
        contact_text: "CONTATTI",
        home_title: "Designer Digitale & Sviluppatore Webflow",
        home_description: "Sono Zaim Halili, designer digitale e sviluppatore Webflow — collaboro con brand in tutto il mondo per creare siti web ad alte prestazioni che aumentano il coinvolgimento, stimolano la crescita e producono risultati concreti.",
        cases: ["CASO STUDIO 01", "CASO STUDIO 02", "CASO STUDIO 03"],
        case_titles: ["Trova il Colore", "La Mia Libreria", "La Vita è Temporanea"],
        case_descriptions: [
            "Generatore di palette colori dove puoi scegliere o randomizzare un codice hex; i colori appaiono in barre con il valore esadecimale.",
            "Aggiungi libri letti, scrivi commenti e visualizza riassunti, personaggi principali, numero di pagine, copertine e fan art delle scene chiave.",
            "Diario della gratitudine: scrivi tre motivi per cui sei grato a qualcuno, carica un'immagine e visualizza le voci come blocchi visivi di memoria."
        ],
        view_case: "Vedi Caso Studio",
        about_id: "CHI SONO",
        personal_description: "Costruttore nel cuore, appassionato di design, tecnologia e web. Ossessionato da UI pulite, UX intelligenti e risultati concreti.\n\nOltre 2 anni a creare esperienze digitali — efficienti, strutturate e orientate all'impatto. Progetto con chiarezza, sviluppo con intenzione e tengo al centro utenti e obiettivi di business.\n\nBasato in Italia, lavoro a livello globale.",
        final_hook: "Cerchi uno Sviluppatore Webflow?",
        get_in_touch_text: "CONTATTAMI"
    }
};
// Default to Italian if no saved preference
let savedLang = localStorage.getItem("isItalian");
let isItalian = savedLang === null ? true : savedLang === "true";

function translateIT() {
    const lang = isItalian ? translations.IT : translations.ENG;

    // Button shows opposite language
    document.getElementById('language').innerText = isItalian ? "ENG" : "IT";

    document.getElementById('contact_text').innerText = lang.contact_text;
    document.getElementById('home-title').innerText = lang.home_title;
    document.getElementById('home-description').innerText = lang.home_description;

    for (let i = 0; i < lang.cases.length; i++) {
        document.getElementById('case' + (i + 1)).innerText = lang.cases[i];
        document.getElementsByClassName('case-title')[i].innerText = lang.case_titles[i];
        document.getElementsByClassName('case-description')[i].innerText = lang.case_descriptions[i];
        document.getElementsByClassName('view-case')[i].innerText = lang.view_case;
    }

    document.getElementById('about_id').innerText = lang.about_id;
    document.getElementById('personal-description-paragraph').innerText = lang.personal_description;
    document.getElementById('final-hook').innerText = lang.final_hook;
    document.getElementById('get_in_touch_text').innerText = lang.get_in_touch_text;
}

function toggleLanguage() {
    isItalian = !isItalian;
    localStorage.setItem("isItalian", isItalian.toString());
    translateIT();
}

// Apply saved/default language immediately after DOM is ready
window.addEventListener("DOMContentLoaded", translateIT);

// On button click: toggle mode and save
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("isDarkMode", isDark);
}

// On page load: read saved preference and apply
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("isDarkMode");
    if (saved === "true") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

//Animate text

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const homeTitle = document.querySelectorAll('.home-title');
homeTitle.forEach((el) => observer.observe(el));

const caseTitleAn = document.querySelectorAll('.case-title');
caseTitleAn.forEach((el) => observer.observe(el));

const caseDescriptionAn = document.querySelectorAll('.case-description');
caseDescriptionAn.forEach((el) => observer.observe(el));

const personalDescriptionAn = document.querySelectorAll('.personal-description');
personalDescriptionAn.forEach((el) => observer.observe(el));

const projectIMGdisplay = document.querySelectorAll('.project-img-display');
projectIMGdisplay.forEach((el) => observer.observe(el));

const personalImage = document.querySelectorAll('.personal-image');
personalImage.forEach((el) => observer.observe(el));

const homeDescription = document.querySelectorAll('.home-description');
homeDescription.forEach((el) => observer.observe(el));

const finalHook = document.querySelectorAll('.final-hook');
finalHook.forEach((el) => observer.observe(el));



//Check Overflowing Elements
const viewportWidth = window.innerWidth;
[...document.querySelectorAll('*')].forEach(el => {
    const elWidth = el.getBoundingClientRect().width;
    if (elWidth > viewportWidth) {
        console.log('Overflowing element:', el, 'Width:', elWidth);
    }
});

// <Remaining:>
//     -Other pages
//     -At the bottom a button that scrolls up to home: Turn Back to Home