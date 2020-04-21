function init() {
    let theme = localStorage.getItem("theme");
    if (!theme) {
        document.querySelector("html").setAttribute("data-theme", "light");
        document.querySelector("#light").style.display = "none";
        document.querySelector("#dark").style.display = null;
        localStorage.setItem("theme", "light");
    } else if(theme == "light") {
        document.querySelector("html").setAttribute("data-theme", "light");
        document.querySelector("#light").style.display = "none";
        document.querySelector("#dark").style.display = null;
        localStorage.setItem("theme", "light");
    } else {
        document.querySelector("html").setAttribute("data-theme", "dark");
        document.querySelector("#dark").style.display = "none";
        document.querySelector("#light").style.display = null;
        localStorage.setItem("theme", "dark");
    }
}

function setTheme() {
    let theme = localStorage.getItem("theme");
    // if(! theme) localStorage.setItem("theme", "light");
    if(theme == "dark") {
        document.querySelector("html").setAttribute("data-theme", "light");
        document.querySelector("#light").style.display = "none";
        document.querySelector("#dark").style.display = null;
        localStorage.setItem("theme", "light");
    } else {
        document.querySelector("html").setAttribute("data-theme", "dark");
        document.querySelector("#dark").style.display = "none";
        document.querySelector("#light").style.display = null;
        localStorage.setItem("theme", "dark");
    }
}