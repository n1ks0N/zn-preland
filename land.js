const main = (config) => {
    document.querySelector('body').style.backgroundColor = config.bg;
    document.querySelector('link[rel~="icon"]').href = config.icon;
    // document.querySelector('meta[name="description"]').setAttribute("content", config.desc);
    document.querySelector('.header__title').textContent = config.name;
    document.title = config.name;
    document.querySelector('.main__title').textContent = config.title;
    document.querySelectorAll('.main__btn')[0].textContent = config.btnFirstText;
    document.querySelectorAll('.main__btn')[1].textContent = config.btnSecText;
    // document.querySelectorAll('.main__btn')[0].addEventListener('click', () => window.open(`${config.btnFirstLink}`, '_blank'));
    // document.querySelectorAll('.main__btn')[1].addEventListener('click', () => window.open(`${config.btnSecLink}`, '_blank'));
    document.querySelector('.main__img_image').src = config.img;
};
document.addEventListener('DOMContentLoaded', () => {
    if (typeof config != 'undefined') {
        main(config);
    } else {
        const config = {
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
        main(config);
    }
});