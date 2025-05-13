// SOTOUT ME = INDEX.HTML

const headeR = document.getElementById('Header');
const shadoW = document.getElementById('Shadow');

// Menu Shop 

 const buttoN = document.querySelector('div.close-back > button');
const shoP = document.getElementById('Shop');
const baG = document.getElementById('Bag');
const arroW = document.getElementById('Arrow');
// const shadoW = document.getElementById('Shadow'); // Assuming this is your shadow element
// const headeR = document.getElementById('Hexader'); // You forgot to declare this — I’m adding it

// Event listener - Show menu
shoP.addEventListener('click', () => {
  shadoW.classList.toggle('getback');
  baG.classList.toggle('operat');
  headeR.classList.toggle('pick');
  arroW.classList.toggle('getmove');
});

// Function to close menu (we'll reuse it)
function closeMenu() {
  shadoW.classList.remove('getback');
  baG.classList.remove('operat');
  headeR.classList.remove('pick');
  arroW.classList.remove('getmove');
}

// Close on click of shadow
shadoW.addEventListener('click', closeMenu);

// Close when mouse moves over shadow
shadoW.addEventListener('mouseenter', closeMenu);

window.addEventListener('scroll', () => {
  if (shadoW.classList.contains('getback')) {
    closeMenu();
  }
});

// Clone menu
const contR = document.getElementById('Controllar');
const clonE = document.getElementById('Menu-Mobi');
const mobiL = document.getElementById('Mobi-ani');
const closI = document.getElementById('Closing');

// Add Eventlister to show menu-clone
contR.addEventListener('click', () => {
  clonE.classList.toggle('showme');
  mobiL.classList.toggle('clawer');
  headeR.classList.toggle('globel');
});

closI.addEventListener('click', () => {
  clonE.classList.remove('showme');
  mobiL.classList.remove('clawer');
  headeR.classList.remove('globel');
});

// Bag menu
const contG = document.getElementById('Convert');
const baGs = document.getElementById('BagClone');
const mobiF = document.getElementById('Closis');
const mobiO = document.getElementById('Mid');

// Add Eventlister to show menu-bag
contG.addEventListener('click', () => {
  baGs.classList.toggle('bagshow');
  mobiO.classList.toggle('mider');
  headeR.classList.toggle('globel');
});

mobiF.addEventListener('click', () => {
  baGs.classList.remove('bagshow');
  mobiO.classList.remove('mider');
  headeR.classList.remove('globel');
});