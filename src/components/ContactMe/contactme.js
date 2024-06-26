import "./contactme.css";

export const contactme = (parent) => {
    const divContact = document.createElement("div");
    divContact.id = "contact";
    divContact.classList.add("display-flex");

    const title = document.createElement("h3");
    title.textContent = "Contact Me";

    const text = document.createElement("p");
    text.textContent = "If you want to contact me, click below";

    const sendEmail = document.createElement("a");
    sendEmail.href = "mailto:jesuseliasalba2000@gmail.com";

    const img = document.createElement("img");
    img.src = "./ContacMe/mail.svg";
    img.alt = "Mail Icon"

    sendEmail.appendChild(img);
    
    divContact.appendChild(title);
    divContact.appendChild(text);
    divContact.appendChild(sendEmail);

    parent.appendChild(divContact);
};