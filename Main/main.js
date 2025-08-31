fetch("../About/About.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("id-about-container").innerHTML = data;
  })
  .catch((err) => console.error("Error loading About page:", err));


fetch("../Contact/Contact.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("id-contact-container").innerHTML = data;
  })
  .catch((err) => console.error("Error loading Contact page:", err));


  fetch("../Projects/Projects.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("id-projects-container").innerHTML = data;
    })
    .catch((err) => console.error("Error loading Projects page:", err));

    fetch("../Skills/skills.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("id-skills-container").innerHTML = data;
      })
      .catch((err) => console.error("Error loading Skills page:", err));

      
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".cls-navbar-items");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');

  const useEl = navToggle.querySelector('use');

  const currentHref = useEl.getAttribute('href') || useEl.getAttribute('xlink:href') ;
  const spriteURL = currentHref.split('#')[0] || '../icons.svg';

  let open = false;

  navToggle.addEventListener('click', () => {
    open = !open;

    const id = open ? 'icon-nav-open' : 'icon-nav';
    const newRef = `${spriteURL}#${id}`;

    useEl.setAttribute('href', newRef);

    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
});

