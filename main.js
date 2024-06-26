import { aboutme } from './src/components/Aboutme/aboutme';
import { contactme } from './src/components/ContactMe/contactme';
import { exp_stud } from './src/components/Experience_Studies/experience_studies';
import { myproject } from './src/components/MyProjects/myproject';
import { footer } from './src/components/footer/footer';
import { header } from './src/components/header/header';
import { hero } from './src/components/hero/hero';
import { skills } from './src/components/skills/skills';
import './style.css'

const divApp = document.querySelector("#app");

header(divApp);
hero(divApp);
aboutme(divApp);
skills(divApp);
exp_stud(divApp);
myproject(divApp);
contactme(divApp);
footer(divApp);