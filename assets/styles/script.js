//Sticky header navigasi 
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

//mengembalikan galeri photography keposisi awal
const objectclose = document.getElementsByClassName('sub-card');

for (let i = 0; i < objectclose.length; i++) {
    objectclose[i].addEventListener("click", function () {
        let src = window.location.href.substr(0, window.location.href.indexOf("#"))
        window.location = src;
    });
}
