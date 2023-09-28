const page1= document.querySelector('.page-1');
const page2= document.querySelector('.page-2');
const page3= document.querySelector('.page-3');
const page4= document.querySelector('.page-4');
const btn = document.querySelectorAll('.btn');
const home =document.querySelector('.icon-home');
const statics =document.querySelector('.icon-statics');
const profile =document.querySelector('.icon-profile');
const allIcon = document.querySelectorAll('.footer__item')

btn.forEach(function(btn){
    btn.addEventListener('click', function(){
        page2.style.display = 'block'
        page1.style.display = 'none'
        page3.style.display = 'none'
        page4.style.display = 'none'
    })


})

statics.addEventListener('click', function(){
    page2.style.display = 'none'
    page1.style.display = 'none'
    page3.style.display = 'none'
    page4.style.display = 'block'
})

profile.addEventListener('click', function(){
    page2.style.display = 'none'
    page1.style.display = 'none'
    page3.style.display = 'block'
    page4.style.display = 'none'
})

home.addEventListener('click', function(){
    page2.style.display = 'block'
    page1.style.display = 'none'
    page3.style.display = 'none'
    page4.style.display = 'none'
})
