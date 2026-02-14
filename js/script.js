/* ----------- IDIOMAS (ES / EN) ----------- */ 
const langBtn = document.getElementById("langToggle"); 
let currentLang = localStorage.getItem("lang") || "es"; 

const translations = { 
  es: { 
    menuAbout: "Sobre mí", 
    menuProjects: "Proyectos", 
    menuContact: "Contacto", 
    
    headerName: "Cristian Alhambra", 
    headerRole: "Desarrollador Fullstack",
    
    aboutTitle: "Sobre mí",
    aboutText: `Soy técnico superior en desarrollo de aplicaciones web, actualmente me desempeño como desarrollador fullstack con experiencia práctica en Java, Spring Boot, Angular y base de datos. Me enfoco en crear aplicaciones completas, funcionales y bien estructuradas. Cada proyecto supone un reto que impulsa mi crecimiento personal y profesional. Destaco por mi capacidad de aprendizaje rápido, constancia, trabajo en equipo y enfoque profesional en resolución de problemas.`, 
    
    projectsTitle: "Mis proyectos", 
    ecommerceTitle: "Ecommerce Fullstack",
    ecommerceDesc: `Este proyecto es una plataforma ecommerce fullstack construida con Angular y Spring Boot. Implementa un sistema de autenticación seguro mediante JWT, gestión de usuarios, catálogo dinámico de productos, carrito persistente y proceso de compra completo. Además, cuenta con un panel de administración que permite realizar un CRUD completo (crear, leer, actualizar y eliminar) de productos, categorías y pedidos, garantizando una gestión integral del negocio.`, 
    
    closeModal: "✖",
    contactTitle: "Contacto" 
  }, 
  
  en: { 
    menuAbout: "About me",
    menuProjects: "Projects",
    menuContact: "Contact",
       
    headerName: "Cristian Alhambra",
    headerRole: "Fullstack Developer", 
       
    aboutTitle: "About me",
    aboutText: `I am a certified web application developer and currently work as a full-stack developer with hands-on experience in Java, Spring Boot, Angular, and databases. I focus on creating complete, functional, and well-structured applications. Each project presents a challenge that fosters my personal and professional growth. I excel at rapid learning, perseverance, teamwork, and a professional approach to problem-solving.`, 
       
    projectsTitle: "My projects",
    ecommerceTitle: "Fullstack Ecommerce",
    ecommerceDesc: `This project is a full-stack ecommerce platform built with Angular and Spring Boot. It implements a secure authentication system using JWT, user management, a dynamic product catalog, a persistent shopping cart, and a complete checkout process. Furthermore, it features an administration panel that allows for full CRUD (create, read, update, and delete) functionality for products, categories, and orders, ensuring comprehensive business management.`,
    
    closeModal: "✖", 
    contactTitle: "Contact" 
  } 
}; 

function applyTranslations() { 
  document.querySelectorAll("[data-key]").forEach(el => { 
    const key = el.getAttribute("data-key"); 
    el.textContent = translations[currentLang][key];
  }); 
} 

langBtn.addEventListener("click", () => { 
  currentLang = currentLang === "es" ? "en" : "es"; 
  langBtn.textContent = currentLang === "es" ? "EN" : "ES"; 
  localStorage.setItem("lang", currentLang);
  applyTranslations(); 
}); 

// Cargar idioma guardado 
applyTranslations();

/* ----------- MODO OSCURO / CLARO ----------- */ 
const themeBtn = document.getElementById("themeToggle"); 

// Cargar modo guardado 
if (localStorage.getItem("theme") === "light") { 
  document.body.classList.add("light-mode"); 
  themeBtn.textContent = "☀️";
} 

themeBtn.addEventListener("click", () => { 
  document.body.classList.toggle("light-mode"); 
  
  if (document.body.classList.contains("light-mode")) { 
    themeBtn.textContent = "☀️"; 
    localStorage.setItem("theme", "light"); } 
  else { 
    themeBtn.textContent = "🌙"; 
    localStorage.setItem("theme", "dark"); 
  } 
});

/* ----------- CARRUSEL CON FLECHAS ----------- */
function initCarousel(id) { 
  const carousel = document.getElementById(id); 
  const images = carousel.querySelectorAll("img");
  const left = carousel.querySelector(".left"); 
  const right = carousel.querySelector(".right");
  
  let index = 0; 

  function showImage(i) { 
    images.forEach(img => img.classList.remove("active")); 
    images[i].classList.add("active"); 
  }
  
  right.addEventListener("click", () => { 
    index = (index + 1) % images.length; 
    showImage(index); 
  });
  
  left.addEventListener("click", () => { 
    index = (index - 1 + images.length) % images.length; 
    showImage(index); 
  });
  
  // Auto-slide
  setInterval(() => {
    index = (index + 1) % images.length; 
    showImage(index);
  }, 3000); 

   // Abrir modal al hacer clic 
  images.forEach((img, i) => { 
    img.addEventListener("click", () => { 
      openModal(images, i); 
    }); 
  }); 
}

initCarousel("carousel1"); 

/* MODAL CON ZOOM + FLECHAS */ 

let modalIndex = 0; 
let modalImages = [];

function openModal(images, index) { 
  modalImages = images; 
  modalIndex = index; 
  
  document.getElementById("modalImg").src = modalImages[modalIndex].src; 
  document.getElementById("modal").style.display = "flex"; 
} 

document.querySelector(".closeModal").addEventListener("click", () => { 
  document.getElementById("modal").style.display = "none";
}); 

document.querySelector(".leftModal").addEventListener("click", () => { 
  modalIndex = (modalIndex - 1 + modalImages.length) % modalImages.length; 
  document.getElementById("modalImg").src = modalImages[modalIndex].src; 
});

document.querySelector(".rightModal").addEventListener("click", () => {
  modalIndex = (modalIndex + 1) % modalImages.length;
  document.getElementById("modalImg").src = modalImages[modalIndex].src;
}); 

// Cerrar modal haciendo clic fuera
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.classList.contains("closeModal") || e.target.id === "modal") {
    document.getElementById("modal").style.display = "none"; 
  } 
});

/* ----------- BOTÓN ARRIBA ----------- */ 
const topBtn = document.getElementById("topBtn"); 

window.addEventListener("scroll", () => { 
  topBtn.style.display = window.scrollY > 300 ? "block" : "none"; 
});

topBtn.addEventListener("click", () => { 
  window.scrollTo({ top: 0, behavior: "smooth" }); 
});
