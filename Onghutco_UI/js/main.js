var menuItem = document.querySelector('.header-menu');
var mobileMenu = document.querySelector('.header-icon');
var items = document.querySelector('.navbar-list');

mobileMenu.addEventListener('click', function (e) {
  menuItem.style.left = '0%';
});
menuItem.addEventListener('click', function (e) {
  menuItem.style.left = '-100%';
});
items.addEventListener('click', function (e) {
  e.stopPropagation();
});

// Handle onclick intro section
var numberItem1 = document.querySelector('.intro .intro-title ul li.selected1');
var numberItem2 = document.querySelector('.intro .intro-title ul li.selected2');
var numberItem3 = document.querySelector('.intro .intro-title ul li.selected3');
var icon1 = document.querySelector(
  '.intro .intro-title ul li.selected1 .intro-selected1',
);
var icon2 = document.querySelector(
  '.intro .intro-title ul li.selected2 .intro-selected2',
);
var icon3 = document.querySelector(
  '.intro .intro-title ul li.selected3 .intro-selected3',
);
numberItem1.addEventListener('click', function (e) {
  numberItem1.classList.add('active');
  numberItem2.classList.remove('active');
  numberItem3.classList.remove('active');
  icon1.style.display = 'block';
  icon2.style.display = 'none';
  icon3.style.display = 'none';
});
numberItem2.addEventListener('click', function (e) {
  numberItem2.classList.add('active');
  numberItem1.classList.remove('active');
  numberItem3.classList.remove('active');
  icon2.style.display = 'block';
  icon1.style.display = 'none';
  icon3.style.display = 'none';
});
numberItem3.addEventListener('click', function (e) {
  numberItem3.classList.add('active');
  numberItem1.classList.remove('active');
  numberItem2.classList.remove('active');
  icon3.style.display = 'block';
  icon1.style.display = 'none';
  icon2.style.display = 'none';
});

// Handle onclick process section

var itemSelected = document.querySelectorAll('.process .numb p');

for (var i = 0; i < itemSelected.length; i++) {
  itemSelected[i].onmousedown = (e) => {
    for (var j = 0; j < itemSelected.length; j++) {
      itemSelected[j].style.color = '#828282';
    }
  };
  itemSelected[i].onmouseup = (e) => {
    e.target.style.color = '#219653';
  };
}
