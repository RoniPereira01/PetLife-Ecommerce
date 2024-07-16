
let show = true;

const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    if (show) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'initial';
    }

    menuContent.classList.toggle('on', show);
    show = !show;
});

const searchInput = document.querySelector("#searchInput");
const cards = document.querySelectorAll(".card");

const filterData = () => {
    const searchTerm = searchInput.value.toLowerCase();
    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
};

searchInput.addEventListener("input", filterData);
