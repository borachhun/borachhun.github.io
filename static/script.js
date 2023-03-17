let light;

function lightDarkToggle() {
    light = !light;
    setLightDarkLook();
}

function setLightDarkLook() {
    let bodyClassList = document.querySelector("body").classList;
    bodyClassList.add(light ? "light-mode" : "dark-mode");
    bodyClassList.remove(light ? "dark-mode" : "light-mode");

    let lightDarkToggleIcon = document.querySelector("#lightDarkToggleIcon");
    lightDarkToggleIcon.src = light ? "./static/dark_mode.svg" : "./static/light_mode.svg";
}

function typeNameTitle() {
    const name = "Borachhun You";
    const nameLength = name.length;

    for (let i=0; i<nameLength; i++) {
        setTimeout(
            () => {document.querySelector("#nameTitle").innerHTML += name[i];},
            i*100
        )
    }
}

function init() {
    let date = new Date();
    let hour = date.getHours();
    light = (hour >= 7 && hour < 18);
    setLightDarkLook();
    typeNameTitle();
}