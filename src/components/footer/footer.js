import "./footer.css";

export const footer = (parent) => {
    const footer = document.createElement("footer");
    footer.id = "footer";
    footer.classList.add("display-flex");

    const p = document.createElement("p");
    const texto = document.createTextNode("Designed and built by");
    const span = document.createElement("span");
    span.textContent = " Jesus Elias";

    p.appendChild(texto);
    p.appendChild(span);

    const div = document.createElement("div");

    const github = document.createElement("a");
    github.href = "https://github.com/jesuseliasalba";
    github.target = "_blank";
    const githubLogo = document.createElement("img");
    githubLogo.src = "./Footer/github.svg";
    githubLogo.alt = "GitHub Logo";

    github.appendChild(githubLogo);

    const linkedin = document.createElement("a");
    linkedin.href = "https://www.linkedin.com/in/jesuseliasalba";
    linkedin.target = "_blank";
    const linkedinLogo = document.createElement("img");
    linkedinLogo.src = "./Footer/linkedin.svg";
    linkedinLogo.alt = "Linkedin Logo";

    linkedin.appendChild(linkedinLogo);

    div.appendChild(github);
    div.appendChild(linkedin);


    footer.appendChild(p);
    footer.appendChild(div);
    parent.appendChild(footer);
};