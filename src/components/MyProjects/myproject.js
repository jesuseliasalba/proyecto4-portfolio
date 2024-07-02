import { drawProjectsCards } from "../ProjectsCards/projectscards";
import "./myproject.css";

const ArrayProjects = [
    {
        Title: "Games Hub",
        Content: "In this project I had to create a website, in which I implemented three different games, I hope you enjoy them!",
        Image: "./Projects/GamesHub.png",
        Url: "https://jea-gamehub.netlify.app/"
    },
    {
        Title: "Pinterest",
        Content: "For this project I needed to work with an API to be able to search for photos according to the user's wishes",
        Image: "./Projects/Pinterest.png",
        Url: "https://jea-pinterest.netlify.app/"
    },
    {
        Title: "JD Fake Web",
        Content: "Unofficial JD website, which shows a series of items and I had to create a filter to be able to search by brand and maximum price",
        Image: "./Projects/JD.png",
        Url: "https://jea-jdfake.netlify.app/"
    },
    {
        Title: "RollerTrip.es",
        Content: "This website is the one I love the most and the one that lacks the most work, it's a start up of a group of guys and it's all related to travel and inline skating",
        Image: "./Projects/Rollertrip.png",
        Url: "https://rollertrip.netlify.app/"
    },
    {
        Title: "Landing Page",
        Content: "From my first projects, trying to create a website from a figma provided by the client, simple, without extraordinary things. Functional and with what the client wanted",
        Image: "./Projects/Landingpage.png",
        Url: "https://bespoke-tartufo-facd6e.netlify.app/"
    }
]

export const myproject = (parent) => {
    const myproject = document.createElement("div");
    myproject.id = "Projects";
    myproject.classList.add("display-flex");

    const title = document.createElement("h3");
    title.textContent = "My projects";

    const p = document.createElement("p");
    p.textContent = "Some things I’ve built so far";

    const divProjects = document.createElement("div");
    divProjects.id = "ProjectCards";
    divProjects.classList.add("display-flex");


    drawProjectsCards(ArrayProjects, divProjects);

    myproject.appendChild(title);
    myproject.appendChild(p);
    myproject.appendChild(divProjects);

    parent.appendChild(myproject);
};
