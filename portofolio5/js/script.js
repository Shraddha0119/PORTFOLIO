  fetch("./HTML/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    });

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      // close others
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove("active");
      });

      // toggle current
      item.classList.toggle("active");
    });
  });









// // ===== IMAGE ROTATE FLIP =====


// ***********************//
const wrapper = document.getElementById("imageWrapper");
const profileWrapper = document.querySelector(".profile-wrapper");


const hero = document.querySelector(".section1");
const about = document.querySelector(".section2");
const services = document.querySelector(".section3");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  const heroStart = hero.offsetTop;
  const heroEnd = heroStart + hero.offsetHeight;

  const aboutStart = about.offsetTop;
  const aboutEnd = aboutStart + about.offsetHeight;

  const serviceStart = services.offsetTop;
  const serviceEnd = serviceStart + services.offsetHeight;

  let rotateY = 0;
  let rotateZ = 0;
  let left = 50;

  // HERO
  if (scroll >= heroStart && scroll < heroEnd) {
    const p = (scroll - heroStart) / hero.offsetHeight;
    rotateY = -180 * p;
    rotateZ = 6 * p;
    left = 50;
    wrapper.style.display = "block"; // show image
    
  }

  // ABOUT
  else if (scroll >= aboutStart && scroll < aboutEnd) {
    const p = (scroll - aboutStart) / about.offsetHeight;
    rotateY = 180 + (-180 * p);
    rotateZ = 6 + (4 * p);
    left = 50 + (25 * p);
    wrapper.style.display = "block"; // show image
   
  }

  // SERVICES
  else if (scroll >= serviceStart && scroll < serviceEnd) {
    const p = (scroll - serviceStart) / services.offsetHeight;
    rotateY = 180  (180 * p);
    rotateZ = 10 + (4 * p);
    left = 75;
    wrapper.style.display = "block"; // show image
    
    
  }

  // AFTER SERVICES → hide image completely
  else if (scroll >= serviceEnd) {
    wrapper.style.display = "none"; // image disappears
    return; 
  }// stop updating transform
  // Apply transform only if visible
  wrapper.style.left = left + "%";
  profileWrapper.style.transform = `rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
});





// ==============srvices===============//
document.querySelectorAll('.service-item').forEach(item => {
  const icon = item.querySelector('.icon');
  const serviceHead = item.querySelector('.service-head'); // target the whole head
  const imageSrc = item.getAttribute('data-image');

  // Create floating image element
  const floatImg = document.createElement('img');
  floatImg.src = imageSrc;
  floatImg.classList.add('floating-image');
  item.appendChild(floatImg);

  // Toggle accordion when clicking anywhere in service head
  serviceHead.addEventListener('click', () => {
    // close others
    document.querySelectorAll('.service-item').forEach(i => {
      if (i !== item) i.classList.remove('active');
    });
    // toggle current
    item.classList.toggle('active');
  });

  // Show image on hover (still tied to icon if you want)
  icon.addEventListener('mouseenter', () => {
    floatImg.classList.add('visible');
  });

  // Hide image when hover ends
  icon.addEventListener('mouseleave', () => {
    floatImg.classList.remove('visible');
  });
});


// ======project section=============== //

