// Caraousel
$(".carousel-custome").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverpause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});

//login
let container = document.querySelector(".sec-container-modal");

function login() {
    container.style.transform="scale(1)";
    setTimeout(() => {
        container.style.transform="rotateY(0)"
    }, 50);
}

function signup() {
    container.style.transform="scale(1)";
    setTimeout(() => {
        container.style.transform="rotateY(180deg)"
    }, 50);
}

function removeCard(){
    container.style.transform="scale(0)"
}

