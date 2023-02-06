let menu = document.getElementById("menu")

menu.addEventListener("click", () =>{
    document.querySelector(".sidenav").classList.toggle("active")
    document.querySelector(".bar-1").classList.toggle("rotate")
    document.querySelector(".bar-2").classList.toggle("rotate")
    document.querySelector(".bar-3").classList.toggle("rotate")
})