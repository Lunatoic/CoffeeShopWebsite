var logo = document.querySelector('.logo');

setInterval(() => {
    logo.style.borderLeft = "2px solid red";
}, 3000);

setInterval(() => {
    logo.style.borderLeft = "none";
}, 3600);