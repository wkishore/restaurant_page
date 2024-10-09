function create_food_divs(img_link, food_name, food_desc){
    const food = document.createElement("div");
    food.classList.add("food");

    let img = document.createElement("img");
    img.src = img_link;
    img.alt = "";
    img.width = 300;
    img.height = 300;
    
    let nam = document.createElement("h3");
    nam.textContent = food_name;

    let info = document.createElement("p");
    info.textContent = food_desc;

    food.appendChild(img);
    food.appendChild(nam);
    food.appendChild(info);

    return food;
}

function create_menu(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.classList.remove("flexLay");
    content.classList.add("gridLay");
    let food_list = [
        create_food_divs(
            "https://unsplash.com/photos/sliced-green-avocado-fruit-9aOswReDKPo",
            "avocado",
            "is a fruit"
        ),
        create_food_divs(
            "https://unsplash.com/photos/photo-of-popcorn-kernels-PvAAYZx-yf8",
            "popcorn",
            "is popcorn"
        ),
        create_food_divs(
            "https://unsplash.com/photos/grilled-steak-with-vegetables-on-white-ceramic-plate-Yr4n8O_3UPc",
            "pork chop",
            "looks tasty"
        ),
        create_food_divs(
            "https://www.istockphoto.com/photo/homemade-spicy-shrimp-tacos-gm542331706-97117441?utm_campaign=category_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fimages%2Ffood&utm_medium=affiliate&utm_source=unsplash&utm_term=Food+Images+%26+Pictures%3A%3Areduced-affiliates%3Aquarter",
            "soft shell taco",
            "is tasty"
        ),
        create_food_divs(
            "https://unsplash.com/photos/clear-glass-container-with-lemon-slices-AlwIBbFJaX8",
            "lemons",
            "life hands me a lot of these"
        ),
        create_food_divs(
            "https://unsplash.com/photos/close-up-photo-of-cooked-food-on-square-white-plate-auIbTAcSH6E",
            "steak",
            "not available in India(legally)"
        )
    ]
    food_list.forEach((food) => {
        content.appendChild(food);
    });
}

export default create_menu;