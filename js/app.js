document.addEventListener('DOMContentLoaded', function(){

    const img = document.getElementsByClassName('aside_smurf');
    //const reversed = document.querySelector('.rotated');
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
                img[i].style.transform = 'rotateZ(90deg) translateX(' + size + 'px)';
                if (size >= window.innerHeight) {
                    size = 0;
                }

            }
        }, 200);
    }





    // const img = document.getElementById('smurf');
    //
    // img.style.backgroundPositionX = '0px';
    // img.style.backgroundPositionY = '0px';
    // setInterval(function(){
    //     let x = parseInt(img.style.backgroundPositionX);
    //     let y = parseInt(img.style.backgroundPositionY);
    //
    //     if (x + 128 + 128 > 512) {
    //         img.style.backgroundPositionX ='0px';
    //         if(y + 128 + 128 > 512) {
    //             img.style.backgroundPositionY = '0px';
    //         } else {
    //             img.style.backgroundPositionY = y + 128 + 'px';
    //         }
    //
    //     } else {
    //         img.style.backgroundPositionX = x + 128 + 'px';
    //     }
    //
    // }, 200);
});
