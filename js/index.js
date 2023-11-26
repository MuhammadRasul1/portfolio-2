//header
const elHeaderburgerBtn = document.querySelector(".js-burger-btn")
const elHeader = document.querySelector(".header")

if(elHeaderburgerBtn) {
    elHeaderburgerBtn.addEventListener("click", () => {
        elHeader.classList.toggle("header--open")
    })
}

//hero
const elHeroBtn = document.querySelector(".js-btn-modal")
const elModal = document.querySelector(".modal")
const elModalBtnClose = document.querySelector(".modal__btn-close")

if(elHeroBtn) {
    elHeroBtn.addEventListener("click", () => {
        elModal.classList.add("js-modal")
    })
}

elModalBtnClose.addEventListener("click", () => {
    elModal.classList.remove("js-modal")
})

//contact
const elModalBtn = document.querySelector(".js-modal-contact-btn")
const elModalContact = document.querySelector(".modal-contact")
const elModalContactBtnClose = document.querySelector(".modal-contact__btn-close")

if(elModalBtn) {
    elModalBtn.addEventListener("click", () => {
        elModalContact.classList.add("js-modal-contact")
    })
}

elModalContactBtnClose.addEventListener("click", () => {
    elModalContact.classList.remove("js-modal-contact")
})

//main contact
const elMainContactBtn = document.querySelector(".js-modal-main-contact-btn")
const elModalMainContact = document.querySelector(".modal-main-contact")
const elMainContactBtnClose = document.querySelector(".modal-main-contact__btn-close")

if(elMainContactBtn) {
    elMainContactBtn.addEventListener("click", () => {
        elModalMainContact.classList.add("js-modal-main-contact")
    })
}

elMainContactBtnClose.addEventListener("click", () => {
    elModalMainContact.classList.remove("js-modal-main-contact")
})

AOS.init();