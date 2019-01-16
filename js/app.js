document.addEventListener('DOMContentLoaded', function(){

    var img = document.getElementsByClassName('aside_smurf');
    var aside = document.getElementsByTagName('aside');
    var navSign = document.querySelector('.nav_hamburger_sign');
    var navList = document.querySelector('.nav_hamburger_list');
    var photos = document.getElementsByClassName('projects_item_photo');

    img[1].style.webkitTransform = 'rotateZ(90deg) scale(' + (aside[1].clientWidth/132) + ') translateY(' + (130 - aside[1].clientWidth) + 'px)';
    img[1].style.transform = 'rotateZ(90deg) scale(' + (aside[1].clientWidth/132) + ') translateY(' + (130 - aside[1].clientWidth) + 'px)';
    img[0].style.webkitTransform = 'translateY(30vh) scale(' + aside[0].clientWidth/128 + ') translateX(-' + (128 - aside[0].clientWidth) + 'px)';
    img[0].style.transform = 'translateY(30vh) scale(' + aside[0].clientWidth/128 + ') translateX(-' + (128 - aside[0].clientWidth) + 'px)';

    for (let i=0; i<img.length; i++) {
        img[i].style.backgroundPositionX = '0px';
        img[i].style.backgroundPositionY = '0px';
        var size = 1;

        setInterval(() => {
            var x = parseInt(img[i].style.backgroundPositionX);
            var y = parseInt(img[i].style.backgroundPositionY);

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

    var tetris = 2, memory = 2, life = 2, furry = 2, sit = 2, animation = 2;

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
            if (i == 3) {
                photos[3].style.backgroundImage = 'url("./img/furry'+furry+'.png")';
                furry++;
                if (furry > 3) {
                    furry = 1;
                }
            }
            if (i == 4) {
                photos[4].style.backgroundImage = 'url("./img/sit'+sit+'.png")';
                sit++;
                if (sit > 5) {
                    sit = 1;
                }
            }
            if (i == 5) {
                photos[5].style.backgroundImage = 'url("./img/animation'+animation+'.png")';
                animation++;
                if (animation > 6) {
                    animation = 1;
                }
            }
        });
    }

});
