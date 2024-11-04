
let mainBox = document.querySelector('.img-holder')
let imgWrap = document.querySelector('.img-wrap')
let originalImg = document.querySelector('#originalImg')
let line = document.querySelector('#line')

originalImg.style.width = mainBox.offsetWidth+ 'px';

let left = mainBox.offsetLeft;

mainBox.addEventListener('mousemove', function(e){
let boxWidth = (e.pageX - left) + 'px';
imgWrap.style.width = boxWidth;
line.style.left = boxWidth;

})
