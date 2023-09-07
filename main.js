/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const sizeText = document.querySelector('.size');
const sketch = document.querySelector('.container');
const btn16 = document.querySelector('.px16');
const btn32 = document.querySelector('.px32');
const btn64 = document.querySelector('.px64');
const color = document.querySelector('#color');
const clear = document.querySelector('#clear');
const erase = document.querySelector('#eraser');
const colorMode = document.querySelector('#colorMode');
const rainbow = document.querySelector('#rainbow');
let isErase = false;


function rainbowMode () {
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);

    return `rgb(${R}, ${G}, ${B})`
}

window.onload = () => {
    sketch.style.display = 'grid'
    sketch.style['grid-template-columns'] = 'repeat(32, 1fr)'
    sketch.style['grid-template-rows'] = 'repeat(32, 1fr)'
    btn32.classList.add('toggle');
    color.value = '#000000';
    colorMode.classList.add('toggle');

    for (let i = 0; i < 1024; i++) {
        createGrid()
    }
}

function eraseBtn () {
    return '#F8F6F4';
}

btn16.addEventListener('click', () => {
    sketch.style.display = 'grid'
    sketch.style['grid-template-columns'] = 'repeat(16, 1fr)'
    sketch.style['grid-template-rows'] = 'repeat(16, 1fr)'
    btn16.classList.add('toggle');
    btn32.classList.remove('toggle');
    btn64.classList.remove('toggle');
    sketch.innerHTML = '';
    erase.classList.remove('toggle')
    rainbow.classList.remove('toggle')
    colorMode.classList.add('toggle')

    for (let i = 0; i < 256; i++) {
        createGrid()
    }
});

btn32.addEventListener('click', () => {
    sketch.style.display = 'grid'
    sketch.style['grid-template-columns'] = 'repeat(32, 1fr)'
    sketch.style['grid-template-rows'] = 'repeat(32, 1fr)'
    btn16.classList.remove('toggle');
    btn32.classList.add('toggle');
    btn64.classList.remove('toggle');
    sketch.innerHTML = '';
    erase.classList.remove('toggle')
    rainbow.classList.remove('toggle')
    colorMode.classList.add('toggle')

    for (let i = 0; i < 1024; i++) {
        createGrid()
    }
});
btn64.addEventListener('click', () => {
    sketch.style.display = 'grid'
    sketch.style['grid-template-columns'] = 'repeat(64, 1fr)'
    sketch.style['grid-template-rows'] = 'repeat(64, 1fr)'
    btn16.classList.remove('toggle');
    btn32.classList.remove('toggle');
    btn64.classList.add('toggle');
    sketch.innerHTML = '';
    erase.classList.remove('toggle')
    rainbow.classList.remove('toggle')
    colorMode.classList.add('toggle')


    for (let i = 0; i < 4096; i++) {
        createGrid()
    }
});

function currentColor() {
    color.addEventListener('input', () => {
        return color.value;
    });
}

function createGrid () {
    const pixel = document.createElement('div');
    sketch.append(pixel);
    pixel.classList.add('pixel');
    pixel.style.background = '#F8F6F4'

    if (isErase === false) {
        currentColor()
    }
    
    pixel.addEventListener('mouseover', () => {
        pixel.style.background = color.value;
    });

    colorMode.addEventListener('click', () => {
        erase.classList.remove('toggle')
        colorMode.classList.add('toggle')
        rainbow.classList.remove('toggle')
        color.value = currentColor();
        pixel.addEventListener('mouseover', () => {
            pixel.style.background = color.value;
        })
    })

    clear.addEventListener('click', () => {
        pixel.style.background = '#F8F6F4';
    });

    rainbow.addEventListener('click', () => {
        erase.classList.remove('toggle')
        colorMode.classList.remove('toggle')
        rainbow.classList.add('toggle')
        pixel.addEventListener('mouseover', () => {
            pixel.style.background = rainbowMode();
        })
    })


    erase.addEventListener('click', () => {
        colorMode.classList.remove('toggle');
        rainbow.classList.remove('toggle')
        erase.classList.add('toggle');
        pixel.addEventListener('mouseover', () => {
            pixel.style.background = eraseBtn();
        })
    })
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC1yZWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNpemVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemUnKTtcclxuY29uc3Qgc2tldGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5jb25zdCBidG4xNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5weDE2Jyk7XHJcbmNvbnN0IGJ0bjMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB4MzInKTtcclxuY29uc3QgYnRuNjQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHg2NCcpO1xyXG5jb25zdCBjb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvcicpO1xyXG5jb25zdCBjbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhcicpO1xyXG5jb25zdCBlcmFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcmFzZXInKTtcclxuY29uc3QgY29sb3JNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbG9yTW9kZScpO1xyXG5jb25zdCByYWluYm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhaW5ib3cnKTtcclxubGV0IGlzRXJhc2UgPSBmYWxzZTtcclxuXHJcblxyXG5mdW5jdGlvbiByYWluYm93TW9kZSAoKSB7XHJcbiAgICBsZXQgUiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSk7XHJcbiAgICBsZXQgRyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSk7XHJcbiAgICBsZXQgQiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSk7XHJcblxyXG4gICAgcmV0dXJuIGByZ2IoJHtSfSwgJHtHfSwgJHtCfSlgXHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBza2V0Y2guc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xyXG4gICAgc2tldGNoLnN0eWxlWydncmlkLXRlbXBsYXRlLWNvbHVtbnMnXSA9ICdyZXBlYXQoMzIsIDFmciknXHJcbiAgICBza2V0Y2guc3R5bGVbJ2dyaWQtdGVtcGxhdGUtcm93cyddID0gJ3JlcGVhdCgzMiwgMWZyKSdcclxuICAgIGJ0bjMyLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xyXG4gICAgY29sb3IudmFsdWUgPSAnIzAwMDAwMCc7XHJcbiAgICBjb2xvck1vZGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDI0OyBpKyspIHtcclxuICAgICAgICBjcmVhdGVHcmlkKClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZXJhc2VCdG4gKCkge1xyXG4gICAgcmV0dXJuICcjRjhGNkY0JztcclxufVxyXG5cclxuYnRuMTYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBza2V0Y2guc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xyXG4gICAgc2tldGNoLnN0eWxlWydncmlkLXRlbXBsYXRlLWNvbHVtbnMnXSA9ICdyZXBlYXQoMTYsIDFmciknXHJcbiAgICBza2V0Y2guc3R5bGVbJ2dyaWQtdGVtcGxhdGUtcm93cyddID0gJ3JlcGVhdCgxNiwgMWZyKSdcclxuICAgIGJ0bjE2LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xyXG4gICAgYnRuMzIuY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlJyk7XHJcbiAgICBidG42NC5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUnKTtcclxuICAgIHNrZXRjaC5pbm5lckhUTUwgPSAnJztcclxuICAgIGVyYXNlLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZScpXHJcbiAgICByYWluYm93LmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZScpXHJcbiAgICBjb2xvck1vZGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJylcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XHJcbiAgICAgICAgY3JlYXRlR3JpZCgpXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuYnRuMzIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBza2V0Y2guc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xyXG4gICAgc2tldGNoLnN0eWxlWydncmlkLXRlbXBsYXRlLWNvbHVtbnMnXSA9ICdyZXBlYXQoMzIsIDFmciknXHJcbiAgICBza2V0Y2guc3R5bGVbJ2dyaWQtdGVtcGxhdGUtcm93cyddID0gJ3JlcGVhdCgzMiwgMWZyKSdcclxuICAgIGJ0bjE2LmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZScpO1xyXG4gICAgYnRuMzIuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XHJcbiAgICBidG42NC5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUnKTtcclxuICAgIHNrZXRjaC5pbm5lckhUTUwgPSAnJztcclxuICAgIGVyYXNlLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZScpXHJcbiAgICByYWluYm93LmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZScpXHJcbiAgICBjb2xvck1vZGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJylcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMjQ7IGkrKykge1xyXG4gICAgICAgIGNyZWF0ZUdyaWQoKVxyXG4gICAgfVxyXG59KTtcclxuYnRuNjQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBza2V0Y2guc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xyXG4gICAgc2tldGNoLnN0eWxlWydncmlkLXRlbXBsYXRlLWNvbHVtbnMnXSA9ICdyZXBlYXQoNjQsIDFmciknXHJcbiAgICBza2V0Y2guc3R5bGVbJ2dyaWQtdGVtcGxhdGUtcm93cyddID0gJ3JlcGVhdCg2NCwgMWZyKSdcclxuICAgIGJ0bjE2LmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZScpO1xyXG4gICAgYnRuMzIuY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlJyk7XHJcbiAgICBidG42NC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcclxuICAgIHNrZXRjaC5pbm5lckhUTUwgPSAnJztcclxuICAgIGVyYXNlLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZScpXHJcbiAgICByYWluYm93LmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZScpXHJcbiAgICBjb2xvck1vZGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJylcclxuXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDk2OyBpKyspIHtcclxuICAgICAgICBjcmVhdGVHcmlkKClcclxuICAgIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBjdXJyZW50Q29sb3IoKSB7XHJcbiAgICBjb2xvci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICByZXR1cm4gY29sb3IudmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR3JpZCAoKSB7XHJcbiAgICBjb25zdCBwaXhlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2tldGNoLmFwcGVuZChwaXhlbCk7XHJcbiAgICBwaXhlbC5jbGFzc0xpc3QuYWRkKCdwaXhlbCcpO1xyXG4gICAgcGl4ZWwuc3R5bGUuYmFja2dyb3VuZCA9ICcjRjhGNkY0J1xyXG5cclxuICAgIGlmIChpc0VyYXNlID09PSBmYWxzZSkge1xyXG4gICAgICAgIGN1cnJlbnRDb2xvcigpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHBpeGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICBwaXhlbC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3IudmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb2xvck1vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZXJhc2UuY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlJylcclxuICAgICAgICBjb2xvck1vZGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJylcclxuICAgICAgICByYWluYm93LmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZScpXHJcbiAgICAgICAgY29sb3IudmFsdWUgPSBjdXJyZW50Q29sb3IoKTtcclxuICAgICAgICBwaXhlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBpeGVsLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvci52YWx1ZTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwaXhlbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNGOEY2RjQnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmFpbmJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBlcmFzZS5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUnKVxyXG4gICAgICAgIGNvbG9yTW9kZS5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUnKVxyXG4gICAgICAgIHJhaW5ib3cuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJylcclxuICAgICAgICBwaXhlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBpeGVsLnN0eWxlLmJhY2tncm91bmQgPSByYWluYm93TW9kZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBlcmFzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb2xvck1vZGUuY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlJyk7XHJcbiAgICAgICAgcmFpbmJvdy5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUnKVxyXG4gICAgICAgIGVyYXNlLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xyXG4gICAgICAgIHBpeGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgcGl4ZWwuc3R5bGUuYmFja2dyb3VuZCA9IGVyYXNlQnRuKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=