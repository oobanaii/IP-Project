
// add an event listener on the bullets
const allBullets = document.querySelectorAll('.cyber-slider__controls li');

for (const bullet of allBullets) {
    bullet.addEventListener('click', function (e) {

        const upcomingSlide = document.querySelector(`[data-slideid="${bullet.dataset.slide}"]`);
        const currentSlide = document.querySelector('.cyber-slider__wrapper .active');
        // 
        const currentBullet = document.querySelector('.cyber-slider__controls .current');
        // 
        const slideImage = currentSlide.querySelector('.slide-image');
        const glitchArea = currentSlide.querySelector('.glitch-area');
        const imageHTML = slideImage.outerHTML + slideImage.outerHTML;


        if (bullet !== currentBullet) {
            //  remove the current state of a bullet
            currentBullet.classList.remove('current')
            // add it to the current item
            bullet.classList.add('current');

            // ** Switch the slide
            glitchArea.innerHTML = imageHTML
            // add the glitching class
            currentSlide.classList.add('glitching')
            setTimeout(function () {

                //remove the active state of a slider
                currentSlide.classList.remove('active')

                // remove the glitching class
                glitchArea.innerHTML = '';
                currentSlide.classList.remove('glitching');
                
                upcomingSlide.classList.add('active');
            }, 500)

        }

    })
}

// Check in button change
function before(){
    document.getElementById('shards-img')
    .src="Shardstoday.jpg";
    document.getElementById('message')
    .innerHTML="500 Shards";
    document.getElementById('btni')
    .innerHTML="CHECK IN";
}
// After Check in button change
function afterr(){
    document.getElementById('shards-img')
    .src="Shardsdone.jpg";
    document.getElementById('message')
    .innerHTML="501 Shards";
    document.getElementById('btni')
    .innerHTML="CHECKED IN";
}

// Redeem ticket & Coupon code change shard and image

// redeem ticket
function before(){
    document.getElementById('change1')
    .src="Ticket.jpg";
    document.getElementById('message')
    .innerHTML="501 Shards";

}
function after1(){
    document.getElementById('change1')
    .src="T1R.jpg";
    document.getElementById('message')
    .innerHTML="500 Shards";

}


// redeem 10%off coupon
function before(){
    document.getElementById('change2')
    .src="ca5.jpg";
    document.getElementById('message')
    .innerHTML="501 Shards";

}
function after2(){
    document.getElementById('change2')
    .src="C1R.jpg";
    document.getElementById('message')
    .innerHTML="450 Shards";

}


// redeem 25%off coupon
function before(){
    document.getElementById('change3')
    .src="ca2.jpg";
    document.getElementById('message')
    .innerHTML="450 Shards";

}
function after3(){
    document.getElementById('change3')
    .src="C3R.jpg";
    document.getElementById('message')
    .innerHTML="350 Shards";

}



// redeem $6 off coupon
function before(){
    document.getElementById('change4')
    .src="c7.jpg";
    document.getElementById('message')
    .innerHTML="350 Shards";

}
function after4(){
    document.getElementById('change4')
    .src="C4R.jpg";
    document.getElementById('message')
    .innerHTML="200 Shards";

}







