const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');


let currentActive = 1;


next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circle.length){
        currentActive = circle.length;
    }
    update()

})

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }

    update()

})

function update() {
    circle.forEach((circles, idx) => {
        if(idx < currentActive){
            circles.classList.add('active');
        } else {
            circles.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1)/ (circle.length - 1) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circle.length){
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
