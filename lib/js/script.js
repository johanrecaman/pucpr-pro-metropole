const slide = [...document.querySelectorAll('.slide')];
const flechaDireita = [...document.querySelectorAll('.nxt-btn')];
const flechaEsquerda = [...document.querySelectorAll('.pre-btn')];

slide.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    flechaDireita[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    flechaEsquerda[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

