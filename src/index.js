import create_menu from "./modules/menu_mod.js";
import create_about from "./modules/about_mod.js";
import create_home from "./modules/home_mod.js";

function init(){

    const content = document.getElementById("content");

    //content = document.querySelector("#content");
    create_home(content);

    
    const homeBtn = document.getElementById("homeBtn");
    const menuBtn = document.getElementById("menuBtn");
    const aboutBtn = document.getElementById("aboutBtn");

    homeBtn.onclick = (e) => { create_home();};
    menuBtn.onclick = (e) => {create_menu();};
    aboutBtn.onclick = (e) => {create_about();};

    
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});

