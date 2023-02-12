import navButton from '../navButton/nav_button';
import './nav-styles.css'

function nav() {
    const navbar = document.createElement('div');
    navbar.classList.add('nav')
    navbar.appendChild(navButton('HOME'))
    navbar.appendChild(navButton('MENU'))
    navbar.appendChild(navButton('CONTACT'))
    return (navbar)
}

function handleActiveClass (navClass) {
    const navButtons = document.querySelectorAll(navClass)
    navButtons.forEach(nav_button => {
        addActiveClass(navButtons, nav_button)
    })

    function addActiveClass (navButtons, nav_Button) {
        const addActive = () => {
            navButtons.forEach(nav_Btn => nav_Btn.classList.remove('active'))
            nav_Button.classList.add('active')
        }
        nav_Button.addEventListener('click', addActive)
    }
}

export default nav
export {handleActiveClass}