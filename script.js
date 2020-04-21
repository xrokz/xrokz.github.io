function setDark() {
    document.querySelector().setAttribute("data-theme", "dark");
    document.querySelector("#dark").style.display = null;
    document.querySelector("#light").style.display = "block";
}

function setLight() {
    document.querySelector().setAttribute("data-theme", "light");
    document.querySelector("#light").style.display = null;
    document.querySelector("#dark").style.display = "block";
    
}