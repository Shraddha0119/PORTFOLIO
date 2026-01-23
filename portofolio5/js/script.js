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





// image rotate animation//

const wrapper = document.getElementById("imageWrapper");
  const profilewrapper = document.querySelector(".profile-wrapper");

  const maxScroll = window.innerHeight * 2;

  window.addEventListener("scroll", () => {
    const scroll = Math.min(window.scrollY, maxScroll);
    const progress = scroll / maxScroll;

    let rotateY = 0;
    let rotateZ = 0;
    let top = 50;
    let left = 50;

    /* ========= PHASE 1 =========
       Section 1 → Section 2
       Rotate + flip to BACK
    ============================ */
    if (progress <= 0.5) {
      const p = progress / 0.5;

      rotateY = -p * 160;   // front → back
      rotateZ = p * 8;


    }

    /* ========= PHASE 2 =========
       Section 2 → Section 3
       Rotate BACK to front + move
    ============================ */
    if (progress > 0.5) {
      const p = (progress - 0.5) / 0.5;

      rotateY = 160 + p * -160;   // 🔥 back → front
      rotateZ = 8 + p * 2;        // subtle rotation

      left = 50+ p * 30;         // right
      top = 30 + p * 30;          // down
    }

    wrapper.style.left = left + "%";
    wrapper.style.top = top + "%";

    profilewrapper.style.transform = `
      rotateY(${rotateY}deg)
      rotateZ(${rotateZ}deg)
    `;
  });


