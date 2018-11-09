document.addEventListener('DOMContentLoaded', function(){

    const img = document.getElementsByClassName('aside_smurf');
    const aside = document.getElementsByTagName('aside');
    const navSign = document.querySelector('.nav_hamburger_sign');
    const navList = document.querySelector('.nav_hamburger_list');
    const photos = document.getElementsByClassName('projects_item_photo');

    img[1].style.webkitTransform = 'rotateZ(90deg) scale(' + (aside[1].clientWidth/132) + ') translateY(' + (130 - aside[1].clientWidth) + 'px)';
    img[1].style.transform = 'rotateZ(90deg) scale(' + (aside[1].clientWidth/132) + ') translateY(' + (130 - aside[1].clientWidth) + 'px)';
    img[0].style.webkitTransform = 'translateY(30vh) scale(' + aside[0].clientWidth/128 + ') translateX(-' + (128 - aside[0].clientWidth) + 'px)';
    img[0].style.transform = 'translateY(30vh) scale(' + aside[0].clientWidth/128 + ') translateX(-' + (128 - aside[0].clientWidth) + 'px)';

    for (let i=0; i<img.length; i++) {
        img[i].style.backgroundPositionX = '0px';
        img[i].style.backgroundPositionY = '0px';
        let size = 1;
        setInterval(() => {
            let x = parseInt(img[i].style.backgroundPositionX);
            let y = parseInt(img[i].style.backgroundPositionY);

            if (x + 128 + 128 > 512) {
                img[i].style.backgroundPositionX ='0px';
                if(y + 128 + 128 > 512) {
                    img[i].style.backgroundPositionY = '0px';
                } else {
                    img[i].style.backgroundPositionY = y + 128 + 'px';
                }
            } else {
                img[i].style.backgroundPositionX = x + 128 + 'px';
            }

            if (i == 1) {
                size += 5;
                if (size + 128>= aside[1].clientHeight) {
                    size = 0;
                }
                img[i].style.webkitTransform = 'rotateZ(90deg) translateX(' + size + 'px) scale(' + (aside[1].clientWidth/132) + ') translateY(' + (130 - aside[1].clientWidth) + 'px)';
                img[i].style.transform = 'rotateZ(90deg) translateX(' + size + 'px) scale(' + (aside[1].clientWidth/132) + ') translateY(' + (130 - aside[1].clientWidth) + 'px)';
            }

        }, 200);
    }

    window.addEventListener('resize', () => {
        if (aside[0].clientWidth < 128) {
            aside[0].querySelector('div').style.webkitTransform = 'translateY(30vh) scale(' + aside[0].clientWidth/128 + ') translateX(-' + (128 - aside[0].clientWidth) + 'px)';
            aside[0].querySelector('div').style.transform = 'translateY(30vh) scale(' + aside[0].clientWidth/128 + ') translateX(-' + (128 - aside[0].clientWidth) + 'px)';
        } else {
            aside[0].querySelector('div').style.webkitTransform = 'translateY(30vh) scale(1)';
            aside[0].querySelector('div').style.transform = 'translateY(30vh) scale(1)';
        }
    });

    navSign.addEventListener('click', () => {
        navList.style.display = (navList.style.display == 'block') ? 'none': 'block';
    });

    let tetris = 2, memory = 2, life = 2;

    for (let i=0; i<photos.length; i++) {
        photos[i].addEventListener('click', () => {
            if (i == 0) {
                photos[0].style.backgroundImage = 'url("./img/tetris'+tetris+'.png")';
                tetris++;
                if (tetris > 4) {
                    tetris = 1;
                }
            }
            if (i == 1) {
                photos[1].style.backgroundImage = 'url("./img/memory'+memory+'.png")';
                memory++;
                if (memory > 3) {
                    memory = 1;
                }
            }
            if (i == 2) {
                photos[2].style.backgroundImage = 'url("./img/life'+life+'.png")';
                life++;
                if (life > 3) {
                    life = 1;
                }
            }
        });
    }

});
