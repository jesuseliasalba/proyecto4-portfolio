import "./hero.css"

export const hero = (parent) => {
    const hero = document.createElement("section");
    hero.id = "Home";
    hero.classList.add("display-flex");

    const leftHero = document.createElement("div");
    leftHero.id = "leftHero";
    leftHero.classList.add("display-flex");

    const greeting = document.createElement("div");
    greeting.id = "greeting";
    greeting.classList.add("display-flex")
    const greetingText = document.createElement("p");
    greetingText.textContent="Hello";
    const greetingHand = document.createElement("p");
    greetingHand.textContent = "👋";

    greeting.appendChild(greetingText);
    greeting.appendChild(greetingHand);

    const textHero = document.createElement("p");
    textHero.textContent = "I'm a web Developer";

    const lastTextHero = document.createElement("p");
    lastTextHero.textContent = "I create things for web"

    leftHero.appendChild(greeting);
    leftHero.appendChild(textHero);
    leftHero.appendChild(lastTextHero);

    const rightHero = document.createElement("div");
    rightHero.id = "rightHero";
    rightHero.classList.add("display-flex");

    const img = document.createElement("img");
    img.src = "./Hero/HeroImgJesus (1_2).JPG";
    img.alt = "Photo of Jesus Elias";

    rightHero.appendChild(img);

    hero.appendChild(leftHero);
    hero.appendChild(rightHero);

    parent.appendChild(hero);

}