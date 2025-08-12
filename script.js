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
function translateToItalian() {
    alert("Italian")
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