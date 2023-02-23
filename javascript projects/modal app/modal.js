const btnn =document.querySelector('#btn');
const mainn =document.querySelector('.modal-contain');
const cloz =document.querySelector('#cloz-btn');


btnn.addEventListener('click', function(){
    mainn.style.display ='block';
})
cloz.addEventListener('click',function(){
    mainn.style.display = 'none';
})


window.addEventListener('click',function(e){

    if (e.target === mainn){
        mainn.style.display = 'none';
    }
})