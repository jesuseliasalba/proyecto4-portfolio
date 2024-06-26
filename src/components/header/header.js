import "./header.css"

const CreateNav = (array) => {
    const ul = document.createElement("ul");
    ul.classList.add("display-flex");
    for (const item of array) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = item;
        a.href = "#"+item;
        li.appendChild(a);
        ul.appendChild(li);
    }
    return ul;
}

export const header = (parent) => {
    const header = document.createElement("header");
    header.id = "header";
    header.classList.add("display-flex");

    const divmenu = document.createElement("div");
    divmenu.id = "menu";
    divmenu.classList.add("display-flex");
    divmenu.classList.add("disappear")

    const divLogo = document.createElement("div");
    divLogo.id = "logo";
    const logo = document.createElement("img");
    logo.src = "/Logo/LogoJEA.png";
    divLogo.appendChild(logo);
    
    const nav = document.createElement("nav");
    const Links = ["Home","About me","Skills","Experience/Studies","Projects"];
    nav.appendChild(CreateNav(Links));

    const contact = document.createElement("a");
    contact.textContent = "Contact me";
    contact.href = "#contact";

    divmenu.appendChild(nav);
    divmenu.appendChild(contact);

    const menuicon = document.createElement("img");
    menuicon.src = "./Nav/iconMenu.svg";
    menuicon.id = "menuicon";
    
    header.appendChild(divLogo);
    header.appendChild(divmenu);
    header.appendChild(menuicon);
    parent.appendChild(header);

    menuicon.addEventListener("click", () => {
        divmenu.classList.toggle("disappear")
        menuicon.classList.toggle("rotate")
    })
}