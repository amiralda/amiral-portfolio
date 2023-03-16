const toogleButton = document.getElementsByClassName('toogle-button')[0]
const overLay = document.getElementsByClassName('overlay')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const close = document.getElementsByClassName('closeMenu')[0]


function click() {
  overLay.classList.toggle('active');
  navbarLinks.classList.toggle('active');
  document.body.classList('.fixed-screen');
  document.overlay.toogle('closeMenu');
}

  toogleButton.addEventListener('click', () => {
  overLay.classList.toggle('active')
  navbarLinks.classList.toggle('active')
  document.body.classList.toggle('fixed-screen')
 closeMenu.addEventListener('click', () => {
  overLay.classList.toggle('active');
  navbarLinks.classList.toggle('active');
  document.body.classList.toggle('fixed-screen');
 })
  })

 // Add event listener to close button
  close.addEventListener('click', () => {
  overLay.classList.remove('active');
  navbarLinks.classList.remove('active');
  document.body.classList.remove('fixed-screen');
  });
