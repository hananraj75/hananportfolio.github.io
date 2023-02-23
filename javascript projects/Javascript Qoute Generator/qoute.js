const qoute = document.querySelector('.poetry');
const  human = document.querySelector('.man');
const btn = document.querySelector('.new-qoute');

const qoutes = [ 
{
    qoute:`"It Does not matter how slowly you go as long as you do not
    stop."`,
    human:`Confucius`
},
{
    qoute:`"Our lives begin to end the day we become silent about
    things that matter."`,
    human:`Martin Luther King.`
},
{
    qoute:`"The Journey of a thousand miles begins with one step,"`,
    human:`Lao Tzu`
}
];

btn.addEventListener('click',function(){

    let random = Math.floor(Math.random()* qoutes.length);

    qoute.innerText = qoutes[random].qoute;
    human.innerText = qoutes[random].human;
})