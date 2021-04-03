$(document).ready(function () {
  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });
  $('.top-nav .nav-link').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });
  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top-100
    }, 2000);
  });
  $('#up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
  });
  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  });
});


let modalClose = document.querySelector(".modal-close");
let jetflixClose = document.querySelector(".jetflix-close");
let dietAppClose = document.querySelector(".dietApp-close");
let travelSiteClose = document.querySelector(".travel-site-close");



let vasitiModalBg = document.querySelector(".vasiti-modal-bg");
let jetflixModalBg = document.querySelector(".jetflix-modal-bg");
let dietAppModalBg = document.querySelector(".dietApp-modal-bg");
let travelSiteModalBg = document.querySelector(".travel-site-modal-bg");


let vasitiBtn = document.querySelector("#vasiti-demo-btn");
let jetFlixBtn = document.querySelector("#jetflix-demo-btn");
let dietAppBtn = document.querySelector("#dietApp-demo-btn");
let travelSiteBtn = document.querySelector("#travelSite-demo-btn");


vasitiBtn.addEventListener("click", () => {
  vasitiModalBg.classList.add("vasiti-active")
})
modalClose.addEventListener("click", () => {
  vasitiModalBg.classList.remove("vasiti-active")
});

jetFlixBtn.addEventListener("click", () => {
  jetflixModalBg.classList.add("jetflix-active")
})
jetflixClose.addEventListener("click", () => {
  jetflixModalBg.classList.remove("jetflix-active")
});

dietAppBtn.addEventListener("click", () => {
  dietAppModalBg.classList.add("dietApp-active")
})
dietAppClose.addEventListener("click", () => {
  dietAppModalBg.classList.remove("dietApp-active")
})

travelSiteBtn.addEventListener("click", () => {
  travelSiteModalBg.classList.add("travel-site-active")
})
travelSiteClose.addEventListener("click", () => {
  travelSiteModalBg.classList.remove("travel-site-active")
})