import './nav_button_styles.css'

function navButton (name) {
    const element = document.createElement('div')
    element.classList.add('nav-button', 'menu', name.toLowerCase())
    name.toUpperCase() === 'HOME' && element.classList.add('active')
    element.textContent = name;
    return (element);
}

export default navButton