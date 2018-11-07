document.addEventListener('DOMContentLoaded', function(){

    const img = document.getElementsByClassName('aside_smurf');
    const reversed = document.getElementById('rotated');

    for (let i=0; i<img.length; i++) {
        img[i].style.backgroundPositionX = '0px';
        img[i].style.backgroundPositionY = '0px';
        let size = 1;
        setInterval(function(){
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
                size = size + 5;
                if (size + 128>= reversed.clientHeight) {
                    size = 0;
                }
                img[i].style.transform = 'rotateZ(90deg) translateX(' + size + 'px)';
            }

        }, 200);
    }

});
