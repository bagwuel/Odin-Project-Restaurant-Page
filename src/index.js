import nav, {handleActiveClass} from './navbar/nav';
import menu from './menu/menu';
import contact from './contact/contact';
import home from './home/home';


import './index.css'
import navButton from './navButton/nav_button';
function content() {
    const contentDiv = document.querySelector('#content')
    contentDiv.appendChild(nav())
    handleActiveClass('.nav-button')
    contentDiv.appendChild(home())

    function removePreviousContent () {
        const allDomContents = document.querySelectorAll('#content > *:not(.nav)')
        allDomContents.forEach(allDomContent => {
            contentDiv.removeChild(allDomContent)
        })
    }

        const navButtons = document.querySelectorAll('.nav-button')
        navButtons.forEach(navbutton => {
              const navName = navbutton.textContent.toLowerCase()
              navbutton.addEventListener('click', () => {
                removePreviousContent ()
                  switch (navName) {
                      case 'home':
                          contentDiv.appendChild(home())
                          break;
                      case 'menu':
                          contentDiv.appendChild(menu())
                          break;
                      case 'contact':
                          contentDiv.appendChild(contact())
                          break;
                      default:
                          break;
                  }
              })
          })
    
} 

content();
