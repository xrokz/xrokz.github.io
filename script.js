function setDark() {
    document.querySelector("html").setAttribute("data-theme", "dark");
    document.querySelector("#dark").style.display = null;
    document.querySelector("#light").style.display = "block";
}

function setLight() {
    document.querySelector("html").setAttribute("data-theme", "light");
    document.querySelector("#light").style.display = null;
    document.querySelector("#dark").style.display = "block";

}