import one from '../assets/svg/projects/Netflix.jpg'
import two from '../assets/svg/projects/Myntra.jpg'
import three from '../assets/svg/projects/colorlib.jpg'
import redux from '../assets/svg/skills/redux.svg'
import react from '../assets/svg/skills/react.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import css from '../assets/svg/skills/css.svg'
import html from '../assets/svg/skills/html.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import { red } from '@material-ui/core/colors'
export const projectsData = [
    {
        id: 1,
        projectName: 'NETFLIX-REPLICA',
        projectDesc: '',
        projectResp: "Areas Of Responsibilities",
        responsibility: ["UserAuthentication", "Integration of Routes", "Cart Page,Place Order Page"],
        tags: [react, redux,materialui],
        code: 'https://github.com/04Mansigarg/Netflix',
        demo: 'https://netflix-eight-iota.vercel.app/',
        image: one
    },
    {
        id: 2,
        projectName: 'MYNTRA-REPLICA',
        projectDesc: 'All round Frontend integrated clone mimicing the user flow and behaviour of Myntra.com.',
        projectResp: "Areas Of Responsibilities",
        responsibility: ["UserAuthentication", "Integration of Routes", "Cart Page,Place Order Page"],
        tags: [react,redux,materialui],
        code: 'https://github.com/04Mansigarg/Myntra_clone',
        demo: 'https://myntra-clone-gilt.vercel.app/',
        image: two
    },
    {
        id: 3,
        projectName: 'COLORLIB-TOURBI',
        projectDesc: 'Weather forecast systems and applications predict weather conditions based on multiple parameters.',
        projectResp: "Areas Of Responsibilities",
        responsibility: ["UserAuthentication", "Integration of Routes", "Cart Page,Place Order Page"],
        tags: [html,css,javascript],
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