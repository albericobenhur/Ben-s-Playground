const toggle = document.querySelector(".toggle-menu");

toggle.addEventListener("click", function(){

    const menu = document.querySelector(".menu");
    if (menu.classList.contains("d-none")){
        menu.classList.remove("d-none")
    }
    else {
        menu.classList.add("d-none")
    }

},false)