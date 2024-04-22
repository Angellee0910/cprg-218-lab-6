var acc = document.getElementsByClassName("accordion");
var clk_search = document.getElementById("search_bar");
var btn_search = document.getElementById("btn_search");


var i,j;              

for (i=0; i<acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        const iconElement = this.querySelector(".accordion_icon");
        iconElement.classList.toggle("fa-plus");
        iconElement.classList.toggle("fa-minus");
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
}

const navLinks = document.querySelectorAll(".menu_item a");
navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const currentLink = document.querySelector('.menu_item_active');
      if (currentLink) {
        currentLink.classList.remove('menu_item_active');
      }
  
      link.classList.add('menu_item_active');
    });
  });
  
const currentURL = window.location.href;
navLinks.forEach(link => {
    if (link.href === currentURL) {
    link.classList.add('menu_item_active');
    }
});


clk_search.addEventListener("click", function(){
    clk_search.removeAttribute("value");
    this.classList.toggle("search_bar_active");
})

btn_search.addEventListener("click", function(){
    alert('Good Luck!')
})


document.getElementById("year").innerHTML = new Date().getFullYear();
