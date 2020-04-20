const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;

document.querySelectorAll('.controls li').forEach(function (indicator, ind) {
    indicator.addEventListener('click', function () {
        sectionIndex = ind;
        document.querySelector('.controls .active').classList.remove('active');
        indicator.classList.add('active');
        slider.style.transform = 'translateX(' + (sectionIndex) * -25 + '%)';
    });
});

arrowLeft.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex -1 : 0;
    document.querySelector('.controls .active').classList.remove('active');
    indicatorParents.children[sectionIndex].classList.add('active');
    slider.style.transform = 'translateX(' + (sectionIndex) * -25 + '%)';
})


arrowRight.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex +1 : 0;
    document.querySelector('.controls .active').classList.remove('active');
    indicatorParents.children[sectionIndex].classList.add('active');
    slider.style.transform = 'translateX(' + (sectionIndex) * -25 + '%)';
})