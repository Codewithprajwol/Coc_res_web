let menu=document.querySelector("#menu-icon");
let navlisty=document.querySelector(".nav-list");
menu.onclick =() =>{
    menu.classList.toggle('bx-x');
        navlisty.classList.toggle('open');
   
}