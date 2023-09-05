const sizeText = document.querySelector('.size');
const sketch = document.querySelector('.container');
const pixel = document.createElement('div');
const btn16 = document.querySelector('.px16');
const btn32 = document.querySelector('.px32');
const btn64 = document.querySelector('.px64');


btn16.addEventListener('click', () => {
    sketch.stlye.display = 'grid'
    sketch.stlye['grid-template-columns'] = 'repeat(16, 1fr)'
});