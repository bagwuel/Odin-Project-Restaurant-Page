import './home.css'

function createElement(elementName, elclass) {
    const element = document.createElement(elementName)
    element.classList.add(elclass)
    return (element)
}

function home () {
    const header = createElement('header', 'header')
    header.id = 'home';
    
    const heroText = createElement('div', 'hero-text')

    const heroTextH1 = createElement('h1', 'hero-textbold')
    heroTextH1.textContent = 'WELCOME TO BAGWUEL RESTAURANT'
   
    const heroTextp = createElement('p', 'hero-textnormal')
    heroTextp.textContent = 'VIETNAMESE RESTAURANT AND SUSHI BAR'

    const heroTextsp = createElement('p', 'hero-textsmall')
    heroTextsp.textContent = 'DÉDÉ LICIEUX'

    const ctaBtn = createElement('button', 'cta')
    ctaBtn.textContent = 'Place Order'

    heroText.appendChild(heroTextH1)
    heroText.appendChild(heroTextp)
    heroText.appendChild(heroTextsp)
    heroText.appendChild(ctaBtn)
    header.appendChild(heroText)

    return (header)
}


export default home