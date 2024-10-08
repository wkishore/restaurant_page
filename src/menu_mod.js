function create_food_divs(img_link, food_name, food_desc){
    food = document.createElement("div");
    food.classList.add("food");

    img = document.createElement("img");
    img.src = img_link;
    img.alt = "";
    img.width = 0;
    img.height = 0;
    
    nam = document.createElement("h3");
    nam.textContent = food_name;

    info = document.createElement("p");
    info.textContent = food_desc;

    food.appendChild(img);
    food.appendChild(nam);
    food.appendChild(info);

    return food;
}

function create_menu(){
    content = document.getElementById("content");
    content.innerHTML = "";
    content.classList.remove("");
    content.classList.add("");
    food_list = [
        create_food_divs(
            "",
            "",
            ""
        ),
        create_food_divs(
            "",
            "",
            ""
        ),
        create_food_divs(
            "",
            "",
            ""
        ),
        create_food_divs(
            "",
            "",
            ""
        ),
        create_food_divs(
            "",
            "",
            ""
        ),
        create_food_divs(
            "",
            "",
            ""
        )
    ]
    food_list.forEach((food) => {
        content.appendChild(food);
    });
}

export default create_menu;