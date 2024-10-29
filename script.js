const cont = document.querySelector('.container');

// cont.ondrag = (e)=>{
//     let x = e.clientX;
//     let y = e.clientY
//     cont.style.position = 'absolute';
//     cont.style.left = x - 50 + 'px';
//     cont.style.top  = y - 50 + 'px';

// }

const addClass = () =>{
    // container.classList.add("box");
    
    cont.classList.add("box");
    

    const box = document.querySelector(".box");

    box.ondrag = (e)=>{
        let  x = e.clientX;
        let  y = e.clientY;
        box.style.position = 'absolute';
        box.style.left = x - 50 + 'px';
        box.style.top  = y - 50 + 'px';
    }

    
}
// const box = document.querySelector('.box');

