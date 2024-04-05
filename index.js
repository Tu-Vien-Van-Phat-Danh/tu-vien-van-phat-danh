const principles = document.querySelector(".principles");
const principlesSub = document.querySelector(".principles-sub");
const biography = document.querySelector(".biography");
const biographySub = document.querySelector(".biography-sub");
const more = document.querySelector(".more");
const moreSub = document.querySelector(".more-sub");

principles.addEventListener("mouseover", () => {
    principlesSub.style.visibility = "visible";
});

principles, principlesSub.addEventListener("mouseleave", () => {
    principlesSub.style.visibility = "hidden";
});

biography.addEventListener("mouseover", () => {
    biographySub.style.visibility = "visible";
});

biography, biographySub.addEventListener("mouseleave", () => {
    biographySub.style.visibility = "hidden";
});

more.addEventListener("mouseover", () => {
    moreSub.style.visibility = "visible";
});

more, moreSub.addEventListener("mouseleave", () => {
    moreSub.style.visibility = "hidden";
});

