const colors =['red','blue','green','yellow','rgba(20,34,210)','gold',];
const btn =document.querySelector('#btn');
const clr =document.querySelector('.color');
const sim =document.querySelector('.simple');

btn.addEventListener('click',function(){

    const random =Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
    clr.innerText = colors[random];
})

