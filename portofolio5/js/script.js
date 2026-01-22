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

// Create floating image element
const floatingImage = document.createElement('img');
floatingImage.className = 'floating-image';
document.body.appendChild(floatingImage);

icons.forEach(icon => {
  const parentItem = icon.closest('.service-item');
  const imageSrc = parentItem.getAttribute('data-image');

  icon.addEventListener('mouseenter', (e) => {
    floatingImage.src = imageSrc;
    const rect = icon.getBoundingClientRect();
    floatingImage.style.top = `${rect.bottom + window.scrollY + 5}px`;
    floatingImage.style.left = `${rect.left + window.scrollX}px`;
    floatingImage.style.opacity = 1;
  });

  icon.addEventListener('mouseleave', () => {
    floatingImage.style.opacity = 0;
  });
});


