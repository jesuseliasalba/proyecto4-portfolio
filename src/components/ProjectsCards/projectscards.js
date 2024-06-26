import "./projectscards.css";

export const drawProjectsCards = (array, parent) => {
    for (const item of array) {
        const div = document.createElement("div");
        div.classList.add("display-flex");
        div.classList.add("cards");


        const divImg = document.createElement("div");
        const img = document.createElement("img");
        img.src = item.Image;
        img.alt = item.Title;
        divImg.appendChild(img);
        
        const h4 = document.createElement("h4");
        h4.textContent = item.Title;

        const text = document.createElement("p");
        text.textContent = item.Content;

        const aButton = document.createElement("a");
        aButton.href = item.Url;
        aButton.textContent = "Visit";
        aButton.target = "_blank";

        div.appendChild(divImg);
        div.appendChild(h4);
        div.appendChild(text);
        div.appendChild(aButton);
        parent.appendChild(div);
    }
}