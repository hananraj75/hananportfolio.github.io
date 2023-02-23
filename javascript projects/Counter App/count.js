let count = 0;
const val= document.querySelector('#value');
const btns=document.querySelectorAll('.btn');


btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const style =e.currentTarget.classList;
        if(style.contains('decrease')){
        count--;}
         else if(style.contains('inc')){
        count++;}
        else {
            count =0;
        }
        if (count < 0){
            val.style.color ='red';
        }
        else if (count > 0){
            val.style.color ='green';
        }
        if (count === 0) {
            val.style.color ='black';
        }
        
        val.innerText = count;
        
       
        
    })
})
