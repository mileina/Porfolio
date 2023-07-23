//texte  effects
// Sélectionner tous les éléments de texte
const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');

// Ajouter la classe "fade-in" à tous les éléments
elements.forEach(element => {
  element.classList.add('fade-in');
});

// Fonction pour vérifier si les éléments sont visibles dans la fenêtre
function checkVisibility() {
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

// Vérifier la visibilité des éléments lors du chargement de la page
checkVisibility();

// Vérifier la visibilité des éléments lors du défilement
window.addEventListener('scroll', checkVisibility);


// Vérifier la visibilité lors du chargement initial de la page
checkVisibility();

// Vérifier la visibilité lors du défilement de la page
window.addEventListener('scroll', checkVisibility);



//transition page accueil
window.addEventListener('load', function() {
    // Obtenez l'élément de transition de la page
    var transitionEl = document.getElementById('page-transition');

    // Affichez l'élément de transition
    transitionEl.style.display = 'block';

    // Attendez que le navigateur ait eu une chance de rendre l'élément
    // C'est nécessaire parce que les animations CSS ne se déclencheront pas sur les éléments nouvellement affichés
    setTimeout(function() {
        // Ajoutez la classe qui déclenche l'animation
        transitionEl.classList.add('animate');

        // Lorsque l'animation est terminée, cachez l'élément
        transitionEl.addEventListener('animationend', function() {
            transitionEl.style.display = 'none';
        }, {once: true}); // L'option {once: true} supprime automatiquement l'écouteur d'événements après qu'il a été déclenché
    }, 50); // Ce délai de 50ms donne au navigateur le temps de rendre l'élément avant que l'animation ne démarre
});



//avions dans contact
function changeColor(element) {
    var level = element.getAttribute('data-level');
    element.classList.add('level-' + level);
  }
  
  function resetColor(element) {
    var level = element.getAttribute('data-level');
    element.classList.remove('level-' + level);
  }

  


  function createPaperPlanes() {
    const numPlanes = 10; // Nombre d'avions en papier
  
    const contactSection = document.querySelector('.contact-container');
    const paperPlanesContainer = document.createElement('div');
    paperPlanesContainer.classList.add('paper-planes');
  
    for (let i = 0; i < numPlanes; i++) {
        const plane = document.createElement('div');
        plane.classList.add('paper-plane');
        plane.style.top = `${Math.random() * 90}%`;  // Limité à 90% pour éviter le débordement
        plane.style.left = `${Math.random() * 90}%`;  // Limité à 90% pour éviter le débordement
        // Définir aléatoirement la direction initiale
        if (Math.random() > 0.5) {
            plane.style.animationName = 'flyRight';
        } else {
            plane.style.animationName = 'flyLeft';
            plane.classList.add('fly-left');  // Ajouter la classe 'fly-left' pour retourner l'image
        }
        plane.style.animationDuration = `${Math.random() * 5 + 5}s`; // Durée de l'animation entre 5 et 10 secondes
        plane.style.animationDelay = `${Math.random() * 3}s`; // Délai de démarrage de l'animation entre 0 et 3 secondes
        paperPlanesContainer.appendChild(plane);
    }
  
    contactSection.appendChild(paperPlanesContainer);
}
  
createPaperPlanes();

//menu leger
// Sélectionner tous les liens du menu
const menuLinks = document.querySelectorAll('.menu a');

// Ajouter un gestionnaire d'événements pour chaque lien du menu
menuLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Fonction pour effectuer un défilement fluide
function smoothScroll(event) {
  event.preventDefault();

  const targetId = event.currentTarget.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
}
