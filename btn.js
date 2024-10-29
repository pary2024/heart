

const  btn = document.querySelector('.btn');


btn.addEventListener('click', ()=>{
    btn.setAttribute('class', 'content')
    btn.classList.add('content');
    const content = document.createElement('h1');
    btn.textContent = 'I LOVE YOU SOHANG SO BIG BIG';
    btn.style.color = 'pink';
    btn.style.fontSize = 100 + 'px' ;
    const heartImg = document.createElement('img');
    heartImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9qlJ_B8f86WOfBGyZCqQuXeA91fY6zTJb8Q&s';
    heartImg.alt = 'heart';
    heartImg.style.width = 150 + 'px'; // Set the size of the image
    heartImg.style.height = 150 + 'px';
    btn.appendChild(heartImg);
   
})