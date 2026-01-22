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

const icons = document.querySelectorAll('.icon');
const floatingImage = document.createElement('img');
floatingImage.className = 'floating-image';
document.body.appendChild(floatingImage);

icons.forEach(icon => {
  const parentItem = icon.closest('.service-item');
  const imageSrc = parentItem.getAttribute('data-image');

  icon.addEventListener('mouseenter', () => {
    floatingImage.src = imageSrc;
    floatingImage.classList.add('visible');
  });

  icon.addEventListener('mousemove', (e) => {
    // Position image smoothly near cursor
    floatingImage.style.top = `${e.pageY - 60}px`;
    floatingImage.style.left = `${e.pageX + 20}px`;
  });

  icon.addEventListener('mouseleave', () => {
    floatingImage.classList.remove('visible');
  });
});
















