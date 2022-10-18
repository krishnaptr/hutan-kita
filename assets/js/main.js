//Navigasi 
const linkMenu = document.querySelector(".menu-link");
linkMenu.addEventListener('click', function(e) {
    const menu = e.target;
    if(menu.classList.contains('link-url')) {
        const menuActive = document.querySelector("a.active");
        if(menuActive !== null && menu.getAttribute('href') !== menuActive.getAttribute('href')) {
            menuActive.classList.remove('active');
        }
        menu.classList.add('active');
    }
});

//Mobile menu
function toggleMenu(){
    let x = document.getElementById("nav-mobile");
    if (x.style.display === "none") {
        x.style.display = "flex";
      } else if(x.style.display === "flex"){
        x.style.display = "none";
      } else{
        x.style.display = "flex";
      }
}