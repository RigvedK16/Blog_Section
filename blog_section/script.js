// script.js
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('#likes');

    likeButtons.forEach(button => {
        let likesCount = 0;

        button.addEventListener('click', () => {
            likesCount++;
            button.querySelector('a').textContent = likesCount;
            button.classList.toggle('liked');
        });
    });
});

let scrollUp = document.getElementById("scrollup");

scrollUp.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scrollUp.style.display = "block";
    }
    else {
        scrollUp.style.display = "none";
    }
});

scrollUp.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
