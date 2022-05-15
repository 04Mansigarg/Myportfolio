import one from '../assets/svg/projects/Netflix.jpg'
import two from '../assets/svg/projects/Myntra.jpg'
import three from '../assets/svg/projects/colorlib.jpg'
import redux from '../assets/svg/skills/redux.svg'
import react from '../assets/svg/skills/react.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import css from '../assets/svg/skills/css.svg'
import express from '../assets/svg/skills/express.svg'
import html from '../assets/svg/skills/html.svg'
import javascript from '../assets/svg/skills/javascript.svg'
export const projectsData = [
    {
        id: 1,
        projectName: 'NETFLIX-CLONE',
        projectDesc: 'A Frontend clone, replicating the user flow and behaviour of Netflix.in.',
        projectResp: "Areas Of Responsibilities",
        responsibility: ["2 Main Pages with Filter and Search", "Redux Integration", "User Authentication", "Backend Integration"],
        tags: [react, redux, express],
        name: ["React", "Redux", "Express"],
        code: 'https://github.com/04Mansigarg/Netflix',
        demo: 'netflix-clone-two-black.vercel.app/',
        image: one
    },
    {
        id: 2,
        projectName: 'MYNTRA-CLONE',
        projectDesc: 'All round Frontend integrated clone, replicating the user flow and behaviour of Myntra.com.',
        projectResp: "Areas Of Responsibilities",
        responsibility: ["UserAuthentication", "Integration of Routes", "Cart Page,Place Order Page"],
        tags: [react, redux, materialui],
        name: ["React", "Redux", "MaterialUi"],
        code: 'https://github.com/04Mansigarg/Myntra_clone',
        demo: 'https://myntra-clone-gilt.vercel.app/',
        image: two
    },
    {
        id: 3,
        projectName: 'COLORLIB-TOURBI',
        projectDesc: 'A static clone of a Web Application that lets user select their dream tour.',
        projectResp: "Areas Of Responsibilities",
        responsibility: ["Developed fully responsive: About and Element page", "Worked on the Footer Part of Website"],
        tags: [html, css, javascript],
        name: ["HTML", "CSS", "Javascript"],
        code: 'https://github.com/04Mansigarg/Tourbi_clone',
        demo: 'https://tourbiclone.netlify.app/',
        image: three
    },
]




// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/