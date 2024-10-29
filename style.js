const footer = document.querySelector('.footer');
const box    = document.querySelector('.box');


box.addEventListener('click', ()=>{
    const content = document.createElement('div');
    content.setAttribute('class','content');
    content.setAttribute('draggable','true');
    footer.appendChild(content);

    content.ondrag = (e)=>{
        let x = e.clientX;
        let y = e.clientY;
        // content.style.position = 'absolute';
        content.style.left = x - footer.offsetLeft - 50  + 'px';
        content.style.top  = y  + 'px';
    }
    
})

// content.setAttribute('class','content');
// content.setAttribute('draggable','true');
// console.log(content)