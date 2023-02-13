let menu = document.getElementById("menu")

menu.addEventListener("click", () =>{
    document.querySelector(".sidenav").classList.toggle("active")
    document.querySelector(".bar-1").classList.toggle("rotate")
    document.querySelector(".bar-2").classList.toggle("rotate")
    document.querySelector(".bar-3").classList.toggle("rotate")
})


const scrollOffset = 100;
const scrollElement = document.querySelector(".js-scroll");
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}
const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})