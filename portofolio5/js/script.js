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

  // ===============service============//

// const icons = document.querySelectorAll('.icon');
// const floatingImage = document.createElement('img');
// floatingImage.className = 'floating-image';
// document.body.appendChild(floatingImage);

// icons.forEach(icon => {
//   const parentItem = icon.closest('.service-item');
//   const imageSrc = parentItem.getAttribute('data-image');

//   icon.addEventListener('mouseenter', () => {
//     floatingImage.src = imageSrc;
//     floatingImage.classList.add('visible');
//   });

//   icon.addEventListener('mousemove', (e) => {
//     // Position image smoothly near cursor
//     floatingImage.style.top = `${e.pageY - 60}px`;
//     floatingImage.style.left = `${e.pageX + 20}px`;
//   });

//   icon.addEventListener('mouseleave', () => {
//     floatingImage.classList.remove('visible');
//   });
// });

// service

// const icons = document.querySelectorAll('.icon');
// const floatingImage = document.createElement('img');
// floatingImage.className = 'floating-image';
// document.body.appendChild(floatingImage);

// icons.forEach(icon => {
//   const parentItem = icon.closest('.service-item');
//   const imageSrc = parentItem.getAttribute('data-image');

//   // Floating image on hover
//   icon.addEventListener('mouseenter', () => {
//     floatingImage.src = imageSrc;
//     floatingImage.classList.add('visible');
//   });

//   icon.addEventListener('mousemove', (e) => {
//     floatingImage.style.top = `${e.pageY - 60}px`;
//     floatingImage.style.left = `${e.pageX + 20}px`;
//   });

//   icon.addEventListener('mouseleave', () => {
//     floatingImage.classList.remove('visible');
//   });

//   // Toggle service-body on click
//   icon.addEventListener('click', () => {
//     parentItem.classList.toggle('active');
//   });
// });
const items = document.querySelectorAll('.service-item');
items.forEach(item => {
  const imageSrc = item.getAttribute('data-image');
  item.addEventListener('mouseenter', () => {
    floatingImage.src = imageSrc;
    floatingImage.classList.add('visible');
  });
  item.addEventListener('mousemove', (e) => {
    floatingImage.style.top = `${e.pageY - 60}px`;
    floatingImage.style.left = `${e.pageX + 20}px`;
  });
  item.addEventListener('mouseleave', () => {
    floatingImage.classList.remove('visible');
  });
});




// image rotate flipping//


const wrapper = document.getElementById("imageWrapper");
const profileWrapper = document.querySelector(".profile-wrapper");

const hero = document.querySelector(".section1");
const services = document.querySelector(".section2");
const about = document.querySelector(".section3");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  const heroStart = hero.offsetTop;
  const heroEnd = heroStart + hero.offsetHeight;

  const serviceStart = services.offsetTop;
  const serviceEnd = serviceStart + services.offsetHeight;

  let rotateY = 0;
  let rotateZ = 0;
  let left = 50; // 👈 DEFAULT CENTER

  /* ===== HERO → SERVICES ===== */
  if (scroll >= heroStart && scroll < heroEnd) {
    const p = (scroll - heroStart) / hero.offsetHeight;
    rotateY = -180 * p;
    rotateZ = 6 * p;
    left = 50; // stay center
  }

  /* ===== SERVICES → ABOUT ===== */
  if (scroll >= serviceStart && scroll < serviceEnd) {
    const p = (scroll - serviceStart) / services.offsetHeight;
    rotateY = 180 + (-180 * p);
    rotateZ = 6 + (4 * p);

    left = 50 + (25 * p); // 🔥 center → right
  }

  /* ===== AFTER ABOUT ===== */
  if (scroll >= serviceEnd) {
    rotateY = 0;
    rotateZ = 10;
    left = 75; // 🔒 stick right
  }

  wrapper.style.left = left + "%";

  profileWrapper.style.transform = `
    rotateY(${rotateY}deg)
    rotateZ(${rotateZ}deg)
  `;




});




