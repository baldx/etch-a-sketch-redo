const sizeText = document.querySelector('.size');
const sketch = document.querySelector('.container');
const btn16 = document.querySelector('.px16');
const btn32 = document.querySelector('.px32');
const btn64 = document.querySelector('.px64');
const color = document.querySelector('#color');
const clear = document.querySelector('#clear');
const erase = document.querySelector('#eraser');
const colorMode = document.querySelector('#colorMode');
let isErase = false;



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
    })

    colorMode.addEventListener('click', () => {
        erase.classList.remove('toggle')
        colorMode.classList.add('toggle')
        color.value = currentColor();
        pixel.addEventListener('mouseover', () => {
            pixel.style.background = color.value;
        })
    })

    clear.addEventListener('click', () => {
        pixel.style.background = '#F8F6F4';
        colorMode.classList.remove('toggle')
    });

    erase.addEventListener('click', () => {
        colorMode.classList.remove('toggle');
        erase.classList.add('toggle');
        pixel.addEventListener('mouseover', () => {
            pixel.style.background = eraseBtn();
        })
    })
}