import create_menu from "./menu_mod";
import create_about from "./about_mod";
import create_home from "./home_mod";

function init(){
    create_home();

    content = document.getElementById("content");
    homeBtn = document.getElementById("homeBtn");
    menuBtn = document.getElementById("menuBtn");
    aboutBtn = document.getElementById("aboutBtn");

    homeBtn.onclick = (e) => { create_home();};
    menuBtn.onclick = (e) => {create_menu();};
    aboutBtn.onclick = (e) => {create_about();};
}

init();
