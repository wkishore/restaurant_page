function create_about(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.classList.remove("gridLay");
    content.classList.add("flexLay");

    let header = document.createElement("h2");
    header.textContent = "About";


    let phone = document.createElement("p");
    phone.textContent = "abjhd97845"

    let address = document.createElement("p");
    address.textContent = "uhubbkfe knfeki iuerfhui"

    content.appendChild(header);
    content.appendChild(phone);
    content.appendChild(address);
}

export default create_about;