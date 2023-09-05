const positions = [
    { top: 20, left: 10 },
    { top: 25, left: 31 },
    { top: 23, left: 75 },
    { top: 80, left: 40 },
    { top: 48, left: 7 },
    { top: 28, left: 55 },
    { top: 76, left: 70 },
    { top: 51, left: 72 },
    { top: 78, left: 18 },
    { top: 61, left: 12 },
    { top: 55, left: 50 },
    { top: 15, left: 75 }
];

document.addEventListener("DOMContentLoaded", function () {
    const titles = document.querySelectorAll('.title');

    titles.forEach((title, index) => {
        title.style.top = positions[index].top + 'vh';
        title.style.left = positions[index].left + 'vw';
    });
});

const info = document.querySelector('#info');
const title = document.querySelector('header');
const question = document.querySelector('#question-mark');

var state_title = false;

title.addEventListener('mouseover', function () {
    if (state_title == false) {
    info.style.display = 'inline-block';
    question.style.display = 'none';
    state_title = true;
    } 
} );

title.addEventListener('mouseout', function () {
    if (state_title == true) {
    info.style.display = 'none';
    question.style.display = 'inline';
    state_title = false;
    } 
} );

