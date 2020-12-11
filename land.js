const main = (land) => {
    document.querySelector('body').style.backgroundColor = land.bg;
    document.querySelector('link[rel~="icon"]').href = land.icon;
    // document.querySelector('meta[name="description"]').setAttribute("content", land.desc);
    document.querySelector('.header__title').textContent = land.name;
    document.title = land.name;
    document.querySelector('.main__title').textContent = land.title;
    document.querySelectorAll('.main__btn')[0].textContent = land.btnFirstText;
    document.querySelectorAll('.main__btn')[1].textContent = land.btnSecText;
    // document.querySelectorAll('.main__btn')[0].addEventListener('click', () => window.open(`${land.btnFirstLink}`, '_blank'));
    // document.querySelectorAll('.main__btn')[1].addEventListener('click', () => window.open(`${land.btnSecLink}`, '_blank'));
    document.querySelector('.main__img_image').src = land.img;
};
document.addEventListener('DOMContentLoaded', () => {
    if (typeof land != 'undefined') {
        main(land);
    } else {
        const state = {
            bg: '#fff',
            icon: 'https://ssl.gstatic.com/atari/images/favicon_2.ico',
            name: 'A-cardin ®',
            // desc: '',
            title: 'SKĄD JESTEŚ?',
            btnFirstText: 'Polska',
            btnSecText: 'Inne państwo',
            // btnFirstLink: '#',
            // btnSecLink: '#',
            img: 'https://i.ibb.co/dWjsRwQ/tovar-header.png'
        };
        main(state);
    }
});