// Menu

document.querySelector('.menu').onclick = (e) => {
    e.currentTarget.classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active');
}

document.querySelectorAll('.navbar li a').forEach(item => {
    let path = window.location.pathname.substring(1, window.location.pathname.length);
    if (item.href.split('/')[item.href.split('/').length - 1] == path) {
        document.querySelectorAll('.navbar li a').forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    }

})

ScrollReveal().reveal('.main .about-main', { distance: '-500px', delay: 300, origin: 'left', reset: true });
ScrollReveal().reveal('.main figure', { distance: '-500px', delay: 300, origin: 'right', reset: true });
ScrollReveal().reveal('header .banner figure', { distance: '-500px', delay: 300, origin: 'right', reset: true });
ScrollReveal().reveal('.cl-21 form button', { scale: 0, delay: 100, reset: true });
ScrollReveal().reveal('header .banner > div', { distance: '-500px', delay: 300, origin: 'left', reset: true });
ScrollReveal().reveal('.cl-21 form > div:nth-child(1)', { distance: '-500px', delay: 300, origin: 'left', reset: true });
ScrollReveal().reveal('.cl-21 form > div:nth-child(2)', { distance: '-500px', delay: 300, origin: 'right', reset: true });
ScrollReveal().reveal('.cl-21 form > div:nth-child(4)', { distance: '-500px', delay: 300, origin: 'right', reset: true });
ScrollReveal().reveal('.cl-21 form > div:nth-child(6)', { distance: '-500px', delay: 300, origin: 'right', reset: true });
ScrollReveal().reveal('.cl-21 form > div:nth-child(3)', { distance: '-500px', delay: 300, origin: 'left', reset: true });
ScrollReveal().reveal('.cl-21 form > div:nth-child(5)', { distance: '-500px', delay: 300, origin: 'left', reset: true });
ScrollReveal().reveal('.offer-main > div:nth-child(1)', { distance: '500px', delay: 300, origin: 'bottom', reset: true });
ScrollReveal().reveal('.offer-main > div:nth-child(2)', { distance: '500px', delay: 400, origin: 'bottom', reset: true });
ScrollReveal().reveal('.offer-main > div:nth-child(3)', { distance: '500px', delay: 500, origin: 'bottom', reset: true });
ScrollReveal().reveal('.offer-main > div:nth-child(4)', { distance: '500px', delay: 600, origin: 'bottom', reset: true });
ScrollReveal().reveal('.offer-main > div:nth-child(5)', { distance: '500px', delay: 700, origin: 'bottom', reset: true });
ScrollReveal().reveal('.offer-main > div:nth-child(6)', { distance: '500px', delay: 800, origin: 'bottom', reset: true });
ScrollReveal().reveal('.privacy > div:nth-child(1)', { distance: '500px', delay: 500, origin: 'right', reset: true });
ScrollReveal().reveal('.privacy > div:nth-child(2)', { distance: '500px', delay: 500, origin: 'left', reset: true });
ScrollReveal().reveal('.privacy > div:nth-child(4)', { distance: '500px', delay: 500, origin: 'left', reset: true });
ScrollReveal().reveal('.privacy > div:nth-child(5)', { distance: '500px', delay: 500, origin: 'right', reset: true });
ScrollReveal().reveal('.privacy > div:nth-child(6)', { distance: '500px', delay: 500, origin: 'left', reset: true });
ScrollReveal().reveal('.privacy > div:nth-child(7)', { distance: '500px', delay: 500, origin: 'bottom', reset: true });
ScrollReveal().reveal('.privacy > div:nth-child(3) ol >li:nth-child(1) ', { distance: '500px', delay: 500, origin: 'bottom', reset: true });
ScrollReveal().reveal('.privacy > div:nth-child(3) ol >li:nth-child(2) ', { distance: '500px', delay: 500, origin: 'bottom', reset: true });
ScrollReveal().reveal('.privacy > div:nth-child(3) ol >li:nth-child(3) ', { distance: '500px', delay: 500, origin: 'bottom', reset: true });
ScrollReveal().reveal('.cl-29', { distance: '500px', delay: 500, origin: 'top', reset: true });
// .cl-29 