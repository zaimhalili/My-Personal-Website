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


function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}