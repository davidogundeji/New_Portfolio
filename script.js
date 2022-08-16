let number = document.getElementById('number');
let counter = 0;
setInterval(() => {
    if (counter == 75) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + '%'
    }

}, 30)

let number2 = document.getElementById('number2');
let counter2 = 0;
setInterval(() => {
    if (counter2 == 85) {
        clearInterval();
    } else {
        counter2 += 1;
        number2.innerHTML = counter2 + '%'
    }

}, 30)

let number3 = document.getElementById('number3');
let counter3 = 0;
setInterval(() => {
    if (counter3 == 95) {
        clearInterval();
    } else {
        counter3 += 1;
        number3.innerHTML = counter3 + '%'
    }

}, 30)

let number4 = document.getElementById('number4');
let counter4 = 0;
setInterval(() => {
    if (counter4 == 75) {
        clearInterval();
    } else {
        counter4 += 1;
        number4.innerHTML = counter4 + '%'
    }

}, 30)

let number5 = document.getElementById('number5');
let counter5 = 0;
setInterval(() => {
    if (counter5 == 80) {
        clearInterval();
    } else {
        counter5 += 1;
        number5.innerHTML = counter5 + '%'
    }

}, 30)

let number6 = document.getElementById('number6');
let counter6 = 0;
setInterval(() => {
    if (counter6 == 80) {
        clearInterval();
    } else {
        counter6 += 1;
        number6.innerHTML = counter6 + '%'
    }

}, 30)

let number7 = document.getElementById('number7');
let counter7 = 0;
setInterval(() => {
    if (counter7 == 80) {
        clearInterval();
    } else {
        counter7 += 1;
        number7.innerHTML = counter7 + '%'
    }

}, 30)
let number8 = document.getElementById('number8');
let counter8 = 0;
setInterval(() => {
    if (counter8 == 80) {
        clearInterval();
    } else {
        counter8 += 1;
        number8.innerHTML = counter8 + '%'
    }

}, 30)


// header background reveal
const headerBg = () =>{
    const header = document.querySelector(".js-header");

    window.addEventListener("scroll", function(){
        if(this.scrollY > 0){
            header.classList.add("bg-reveal");
        }else{
            header.classList.remove("bg-reveal");
        }
    })
}
headerBg();

// nav
const navigation = () =>{
    const navToggler = document.querySelector(".js-nav-toggler");
    const nav = document.querySelector(".js-nav");
    const navItems = nav.querySelectorAll("li");

    const navToggle = ()=>{
        nav.classList.toggle("open");
        navToggler.classList.toggle('active');
    }
    navToggler.addEventListener('click', navToggle);

    navItems.forEach((li) =>{
        li.querySelector('a').addEventListener('click', ()=>{
            if(window.innerWidth <= 767){
                navToggle();
            }
        })
    })
}
navigation();