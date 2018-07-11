const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');

// console.log(backdrop);

const closeModal = () => {
  // modal.style.display = 'none';
  // backdrop.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.style.display = 'none';
  setTimeout(() => {
    backdrop.classList.remove('open');
  }, 200);
};

selectPlanButtons.forEach(button => {
  button.addEventListener('click', () => {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    // modal.className = 'open' //this will actually overwrite the complete class list
    modal.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(() => {
      backdrop.classList.add('open');
    }, 10);
  });
});

backdrop.addEventListener('click', () => {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', () => {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(() => {
    backdrop.classList.add('open');
  }, 10);
});

ctaButton.addEventListener('animationstart', event => {
  console.log('Animation started', event);
});

ctaButton.addEventListener('animationend', event => {
  console.log('Animation ended', event);
});

ctaButton.addEventListener('animationiteration', event => {
  console.log('Animation iteration', event);
});
