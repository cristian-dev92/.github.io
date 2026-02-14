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

  // Zoom modal
  images.forEach(img => {
    img.addEventListener("click", () => {
      document.getElementById("modalImg").src = img.src; 
      document.getElementById("modal").style.display = "flex"; 
    });
  });

}

initCarousel("carousel1"); 

/* ----------- MODAL ----------- */ 
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
