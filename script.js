// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// };

// window.addEventListener("load", () => {
//     document.querySelectorAll('.animated').forEach((el) => {
//         el.classList.remove('animated');
//         void el.offsetWidth; // Trigger reflow
//         el.classList.add('animated');
//     });
// });

let tr_to_IT = false;

function translateToItalian() {
    if (tr_to_IT) {
        tr_to_IT = false;
        document.getElementById('language').innerText = "ENG";
        document.getElementById('contact_text').innerText = "CONTACT";
        document.getElementById('home-title').innerText = "Digital Designer & Webflow Developer";
        document.getElementById('home-description').innerText = "I'm Zaim Halili, a digital designer and Webflow developer — I partner with brands worldwide to build high-converting, goal-oriented websites that boost engagement, drive growth, and deliver measurable results."
        for (let i = 1; i < 4; i++) {
            document.getElementById('case' + i).innerText = "CASE STUDY 0" + i;
        }
        let caseTitle = document.getElementsByClassName('case-title');
        caseTitle[0].innerText = "Find The Color";
        caseTitle[1].innerText = "My Bookshelf";
        caseTitle[2].innerText = "Life Is Temporary";
    } else {
        tr_to_IT = true;
        document.getElementById('language').innerText = "IT";
        document.getElementById('contact_text').innerText = "CONTATTI";
    }

}

function darkMode() {
    alert("Dark Mode")
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}



// <Remaining:>
//     -Dark Mode Button
//     -Other pages
//     -Translate to Italian
//     -Animations with JS or CSS only; keyframes
//     -At the bottom a button that scrolls up to home: Turn Back to Home
//     -Refresh

//     <To be checked after finishing:></To>