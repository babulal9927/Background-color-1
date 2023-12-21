const btn = document.querySelector('button');
const body = document.querySelector('body');

const colors = ['skyblue', 'crimson','bittersweet','grey','bulgarian','brown','green','gold','azure','blue', 'orange'];

function changeTheBackground(){
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex]
};


body.style.backgroundColor = 'yellow';

btn.addEventListener('click',changeTheBackground )







































