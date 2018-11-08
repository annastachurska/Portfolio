document.addEventListener('DOMContentLoaded', function(){

    const img = document.getElementsByClassName('aside_smurf');
    const aside = document.getElementsByTagName('aside');
    img[1].style.webkitTransform = 'rotateZ(90deg) scale(' + (aside[1].clientWidth/132) + ') translateY(' + (130 - aside[1].clientWidth) + 'px)';
    img[1].style.transform = 'rotateZ(90deg) scale(' + (aside[1].clientWidth/132) + ') translateY(' + (130 - aside[1].clientWidth) + 'px)';

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

});
