const body = document.querySelector("body");
const nav = document.querySelector("nav");
const sideBars = document.querySelector(".sideBars");
const sideBarClose = document.querySelector(".sideBarClose");
const darkLight = document.querySelector(".darkLight");

sideBars.onclick = () =>{
    nav.classList.add("active");
}

sideBarClose.onclick = () =>{
    nav.classList.remove("active");
}

darkLight.onclick = () =>{
    body.classList.toggle("dark");
    darkLight.classList.toggle("active");
}

