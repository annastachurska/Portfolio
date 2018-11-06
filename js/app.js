document.addEventListener('DOMContentLoaded', function(){
    const img = document.getElementById('smurf');
    img.style.backgroundPositionX = '0px';
    img.style.backgroundPositionY = '0px';
    setInterval(function(){
        let x = parseInt(img.style.backgroundPositionX);
        let y = parseInt(img.style.backgroundPositionY);

        if (x + 128 + 128 > 512) {
            img.style.backgroundPositionX ='0px';
            if(y + 128 + 128 > 512) {
                img.style.backgroundPositionY = '0px';
            } else {
                img.style.backgroundPositionY = y + 128 + 'px';
            }

        } else {
            img.style.backgroundPositionX = x + 128 + 'px';
        }

    }, 200);
});
