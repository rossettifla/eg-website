const menuIcon = document.querySelector("menu-icon")

menuIcon.addEventListener ("click", (event) =>{
    const navList = document.querySelector("#nav-list");
    console.log(navList.classList.contains("hidden"))

    if (navList.classList.contains("hidden")){
        navList.classList.remove("hidden")
    } else {
        navList.classList.add("hidden")
    }
})