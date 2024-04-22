var acc = document.getElementsByClassName("accordion");
var clk_search = document.getElementById("search_bar");
var btn_search = document.getElementById("btn_search");

var i;              

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

clk_search.addEventListener("click", function(){
    clk_search.removeAttribute("value");
    this.classList.toggle("search_bar_active");
})

btn_search.addEventListener("click", function(){
    alert('Good Luck!')
})


document.getElementById("year").innerHTML = new Date().getFullYear();
