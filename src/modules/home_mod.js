function create_home(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.classList.remove("gridLay");
    content.classList.add("flexLay");

    const header = document.createElement("h2");
    header.textContent = "Welcome";

    const description = document.createElement("p");
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non leo ullamcorper, aliquam nisi nec, condimentum ex. Nam sodales, lectus in maximus ornare, lorem mi interdum ante, gravida auctor orci lacus quis nibh. Donec cursus viverra urna at sagittis. Morbi luctus cursus orci, quis ultrices sem dignissim vel.";

    content.appendChild(header);
    content.appendChild(description);
}

export default create_home;