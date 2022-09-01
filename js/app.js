/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
*/
const sections = document.querySelectorAll('.section');
const navBar = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
const fragment = document.createDocumentFragment();
for (let i = 0 ; i< sections.length ; i++)
{
  //take section name
  const liElement = document.createElement('li');
  const secName = sections[i].querySelector('h2').textContent;

  liElement.innerHTML = `<a href = '#${sections[i].getAttribute('id')}'
      class = 'navbar__menu menu__Link'> ${secName}</a>`;
  const anchorElement = liElement.querySelector('a');
  fragment.appendChild(liElement);


  // Scroll to anchor ID using scrollTO event
  document.addEventListener('scroll', function(){

  const bound = sections[i].getBoundingClientRect();
  if (bound['top'] >= -300 && bound ['top'] < 200) {
    //removing your-active-class class from all sections
    for(let k = 0; k<sections.length; k++){
      sections[k].classList.remove('your-active-class');
    };

      // Add class 'active' to section when near top of viewport
      sections[i].classList.add('your-active-class');
      anchorElement.classList.add('your-active-class')
  }
  else
  {
    sections[i].classList.remove('your-active-class');
    anchorElement.classList.remove('your-active-class');
  };
  });

  // go to section when click on the navList
  liElement.addEventListener('click',function(event){
  event.preventDefault();

  sections[i].scrollIntoView({behavior: 'smooth',block:'center',
      inline:'nearest'});
  });
};
navBar.appendChild(fragment);
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
