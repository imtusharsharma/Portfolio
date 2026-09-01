const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// Certificate popup viewer with short description
(() => {
  const modal = document.getElementById("certificateModal");
  if (!modal) return;

  const modalImage = document.getElementById("modalCertificateImage");
  const modalTitle = document.getElementById("modalCertificateTitle");
  const modalProvider = document.getElementById("modalCertificateProvider");
  const modalDescription = document.getElementById("modalCertificateDescription");
  const closeButton = modal.querySelector(".certificate-close");
  const backdrop = modal.querySelector(".certificate-modal-backdrop");

  function closeCertificate() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".cert-item").forEach(item => {
    item.addEventListener("click", () => {
      modalImage.src = item.dataset.image;
      modalImage.alt = item.dataset.title + " certificate";
      modalTitle.textContent = item.dataset.title;
      modalProvider.textContent = item.dataset.provider;
      modalDescription.textContent = item.dataset.description || "";
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  closeButton.addEventListener("click", closeCertificate);
  backdrop.addEventListener("click", closeCertificate);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeCertificate();
  });
})();
