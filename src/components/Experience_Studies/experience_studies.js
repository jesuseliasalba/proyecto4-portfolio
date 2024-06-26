import "./experience_studies.css";
const WorkExperience = [
    {
        Title: "Enterprise Network Installation and Configuration",
        Content: ["LAN/WAN network planning and implementation","Configuration and maintenance of routers, switches and other network equipment"," Evaluation and troubleshooting of connectivity and performance problems","Documentation of network architecture and changes made"]
    },
    {
        Title: "Repair of Computers and Electronic Components",
        Content: ["Diagnosis and repair of computer hardware and software faults","Installation and configuration of operating systems and applications","Repair and replacement of electronic components","Preventive and corrective maintenance of computer equipment"]
    },
    {
        Title: "Installation of Networks in Family Homes",
        Content: ["Design and installation of home networks","Configuration of wireless networks (Wi-Fi) and connected devices","Troubleshooting connectivity issues and network optimisation"]
    },
]
const StudiesList = [
    {
        Title: "Vocational education in networks and microcomputer systems",
        Content: ["Installation and Configuration of Operating Systems","Equipment Assembly and Maintenance","Local Area Networks","Virtualisation"]
    },
    {
        Title: "First Year of Higher Degree in Computer Systems and Network Administration",
        Content: ["Systems Administration"," Local and Wide Area Networks (LAN/WAN)","Network Services and Connectivity"," Programming and Scripting"]
    },
    {
        Title: "Fibre Optic Installation Course",
        Content: ["Fiber Optics Fundamentals","Fibre Optic Installation","Measurement and Diagnostics","Regulations and Standards","Fibre Network Maintenance"]
    },
]

export const exp_stud = (parent) => {
    const expStud = document.createElement("section");
    expStud.id = "Experience/Studies";
    expStud.classList.add("display-flex");

    const selectPag = document.createElement("div");
    selectPag.classList.add("display-flex");
    const expP = document.createElement("h3");
    expP.classList.add("seleccionado");
    expP.textContent = "Experience";
    const studP = document.createElement("h3");
    studP.textContent = "Studies";

    selectPag.appendChild(expP);
    selectPag.appendChild(studP);

    const divExperience = document.createElement("div");
    divExperience.id = "experience";

    for (const work of WorkExperience) {
        const h4 = document.createElement("h4");
        h4.textContent = work.Title;
        const ul = document.createElement("ul");
        for (const experience of work.Content) {
            const li = document.createElement("li");
            li.textContent = experience;
            ul.appendChild(li);
        }
        divExperience.appendChild(h4);
        divExperience.appendChild(ul);
    }

    const divStudies = document.createElement("div");
    divStudies.id = "studies";
    divStudies.classList.add("dissapear");

    for (const studie of StudiesList) {
        const h4 = document.createElement("h4");
        h4.textContent = studie.Title;
        const ul = document.createElement("ul");
        for (const text of studie.Content) {
            const li = document.createElement("li");
            li.textContent = text;
            ul.appendChild(li);
        }
        divStudies.appendChild(h4);
        divStudies.appendChild(ul);
    }

    studP.addEventListener("click", (e) => {
        if (!e.target.classList.contains("seleccionado")) {
            divExperience.classList.toggle("dissapear");
            expP.classList.toggle("seleccionado");
            divStudies.classList.toggle("dissapear");
            studP.classList.toggle("seleccionado");
        }
    });
    expP.addEventListener("click", (e) => {
        if (!e.target.classList.contains("seleccionado")) {
            divExperience.classList.toggle("dissapear");
            expP.classList.toggle("seleccionado");
            divStudies.classList.toggle("dissapear");
            studP.classList.toggle("seleccionado");
        }
    });
    expStud.appendChild(selectPag);
    expStud.appendChild(divExperience);
    expStud.appendChild(divStudies);
    parent.appendChild(expStud);
};