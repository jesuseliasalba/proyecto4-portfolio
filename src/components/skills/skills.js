import "./skills.css";

const SkillsImages = [
    {
        name: "Css3",
        src: "./Skills/css3.svg"
    },
    {
        name: "GitHub",
        src: "./Skills/github.svg"
    },
    {
        name: "Html5",
        src: "./Skills/html5.svg"
    },
    {
        name: "Node",
        src: "./Skills/node.svg"
    },
    {
        name: "Visual Studio Code",
        src: "./Skills/vscode.svg"
    },
    {
        name: "JavaScript",
        src: "./Skills/JS.svg"
    }
]

export const skills = (parent) => {
    const skills = document.createElement("section");
    skills.id = "Skills";
    skills.classList.add("display-flex");

    const h3 = document.createElement("h3");
    h3.textContent= "My Skills";

    const divSkills = document.createElement("div");
    divSkills.classList.add("display-flex");
    divSkills.id = "divSkills";
    
    for (const skill of SkillsImages) {
        const img = document.createElement("img");
        img.src = skill.src;
        img.alt = skill.name;
        divSkills.appendChild(img);
    }

    skills.appendChild(h3);
    skills.appendChild(divSkills);

    parent.appendChild(skills);
}