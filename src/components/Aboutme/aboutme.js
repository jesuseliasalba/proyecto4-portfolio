import "./aboutme.css"

export const aboutme = (parent) => {
    const aboutme = document.createElement("section");
    aboutme.id = "About me";
    aboutme.classList.add("display-flex")

    const h3 = document.createElement("h3");
    h3.textContent= "About me";

    const p = document.createElement("p");
    p.textContent = "I've said I'm a web developer, but I'm really only halfway there. My main goal is to learn how to develop websites that are responsive and accessible. Always taking care of good practices.";

    aboutme.appendChild(h3);
    aboutme.appendChild(p);

    parent.appendChild(aboutme);
}