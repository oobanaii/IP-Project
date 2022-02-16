let subtotal = 0;
const calculateTax = subtotal => {
    const tax = subtotal * 0.13;
    const formattedTax = tax.toFixed(2);
    return formattedTax;
};

const calculateTotal = subtotal => {
    const tax = calculateTax(subtotal);
    const total = parseFloat(subtotal) + parseFloat(tax);
    const formattedTotal = total.toFixed(2);
    return formattedTotal;
};

const getImgLink = title => {
    let imgLink;
    switch (title) {
        case 'Beat Saber':
            imgLink = 'https://www.cnet.com/a/img/resize/2674686d74c8379b413b3fbf01c97ce66fb20b3c/hub/2018/11/30/3622f244-c278-43dd-9227-3e74944e9d84/41701039935-b6186964a3-o.png?auto=webp&width=768';
            break;
        case 'Rick and Morty: Virtual Rick-Ality':
            imgLink = 'https://www.cnet.com/a/img/resize/86f85eb743e3813068f16be0c26415f373b68fbb/hub/2018/11/30/e2d2ed0e-b4b9-45a8-a47b-21ee56801dd8/rick-and-morty-virtual-rick-ality-screen-01-ps4-us-08dec17.jpg?auto=webp&width=768';
            break;
        case 'Cloudlands VR Minigolf':
            imgLink = 'https://www.cnet.com/a/img/resize/dcaaf0db7da72ddee4edad1bd0cf34b59bb4454b/hub/2018/11/30/c0a6d29e-2d7d-441d-8e7b-867032d76eef/ss-0c61759b511a3c70074d0a6268f6852432002fe3.jpg?auto=webp&width=1092';
            break;
        case 'Moss':
            imgLink = 'https://www.cnet.com/a/img/resize/c46f83475b8a4a58489f9d63f588e51a8ba494a7/hub/2018/11/30/394fcb05-e56f-400d-990b-e8a9aee6d70a/moss-screen-03-ps4-us-30oct17.jpg?auto=webp&width=1092';
            break;
        case 'Wipeout Omega Collection':
            imgLink = 'https://www.cnet.com/a/img/resize/d6eefbdea233eef051910780aa5cb872055e7152/hub/2018/11/30/88e8f9a2-41cf-466e-8645-87b64c4fc7a8/wipeout-omega-collection-screen-08-us-03dec16.jpg?auto=webp&width=1092';
            break;
        case 'Firewall Zero Hour':
            imgLink = 'https://www.cnet.com/a/img/resize/d9a9272e1ece7386e79a0e84c7028bba11300432/hub/2018/11/30/69a2c1e0-776d-47a1-b976-5e5b165a50f6/firewall-zero-hour-screen-15-ps4-us-21may18.jpg?auto=webp&width=1092';
            break;
        case 'Catan VR':
            imgLink = 'https://www.cnet.com/a/img/resize/df3933bfc0f3ed6294f46145a7d34fe7dca9d2fb/hub/2018/11/30/e7b71345-0b67-446b-968b-b0112f3f5a35/ss-1ca4634eaee22fb0d9d25cf784835a2595861aa1.jpg?auto=webp&width=1092';
            break; 
        case 'Tetris Effect':
            imgLink = 'https://www.cnet.com/a/img/resize/799d105868752ca04d937b82f986e583c0963354/hub/2018/11/30/b9d8fddf-8258-4bc3-a259-8c8ad89ae823/trip-effect-screen-02-ps4-us-05jun18.jpg?auto=webp&width=1092';
            break; 
        case 'The Elder Scrolls V: Skyrim VR':
            imgLink = 'https://www.cnet.com/a/img/resize/e49c707d1dd77d9656026048efad5519e31c441e/hub/2018/11/30/9b161b11-62a2-4db5-a52d-401695d0ec46/skyrim-vr-screenshot-02-us-12jun17.jpg?auto=webp&width=1092';
            break; 
        case 'Astro Bot Rescue Mission':
            imgLink = 'https://www.cnet.com/a/img/resize/c41ef827ed618db86ae2d26348fe16201d01d86a/hub/2018/11/30/70e21480-fa28-482c-a56d-20be1a7d8e8b/astro-bot-rescue-mission-screen-02-ps4-us-18may18.jpg?auto=webp&width=1092';
            break;
        case 'Fallout 4 VR':
            imgLink = 'https://www.cnet.com/a/img/resize/b3a515697da12490307a83a5a38ab20ce76abdf4/hub/2017/12/27/f8021c6a-46f1-4e9d-834f-10d14dda7235/fallout-4-vr-6.jpg?auto=webp&width=1092';
            break;
        case 'Lone Echo':
            imgLink = 'https://tech.fb.com/wp-content/uploads/2021/09/lone-echo-featured-image.jpg';
            break;
        case 'Eve Valkyrie':
            imgLink = 'https://www.cnet.com/a/img/resize/93bcae7c8be0bb22b1366f1f45fbffd19124b0b6/hub/2016/09/30/23ba399c-3748-4679-891b-b328e012af8d/playstation-vr-games-005.jpg?auto=webp&width=1092';
            break;
        case 'Job Simulator':
            imgLink = 'https://www.cnet.com/a/img/resize/64030a710e970314afcca29a163b0f6342a840d2/hub/2016/04/04/28073f37-7790-409f-8da4-e32ad35e5705/14-job-simulator.jpg?auto=webp&width=1092';
            break;
        case 'Fruit Ninja VR':
            imgLink = 'https://www.cnet.com/a/img/resize/62519856a967e4e1f7219b632b0fbef9fa7b8407/hub/2017/07/14/0a79e97c-c7a3-4f38-956b-88eda74b1d86/fruit-ninja-vr.jpg?auto=webp&width=1092';
            break;
        case 'Space Pirate Trainer':
            imgLink = 'https://www.cnet.com/a/img/resize/b32720516d2f0a2251bbcf1240d8bfdb42300125/hub/2017/07/14/6e517c8e-14e0-4bb4-8810-fcf766e52680/space-pirate-trainer-gameplay.jpg?auto=webp&width=1092';
            break;
        case 'Audioshield':
            imgLink = 'https://www.cnet.com/a/img/resize/02931b84cb323fa209ddf1bbb049f683b54b635c/hub/2017/08/28/715ccf30-0067-449e-956d-9e25f753fbbe/audioshield-screenshot-1-1024x576.jpg?auto=webp&width=1092';
            break;
        case 'Rez Infinite':
            imgLink = 'https://www.cnet.com/a/img/resize/8b8d44f9c783afbab5b92a702546858688e788ad/hub/2016/09/30/b5024225-b879-4e92-b0ff-3aca2c867d38/playstation-vr-games-007.jpg?auto=webp&width=1092';
            break;
        case 'Star Trek: Bridge Crew':
            imgLink = 'https://www.cnet.com/a/img/resize/7399b55a87a1d3b48a5654e60683ae4669005076/hub/2017/07/12/f6e024ae-90e2-4d27-82c3-1986c4c8bfe8/bridge-crew-ubisoft.jpg?auto=webp&width=1092';
            break; 
        case 'Resident Evil 7 ':
            imgLink = 'https://www.cnet.com/a/img/resize/5ef75c0c17cfdb8da6dad705d50161f1f43da86a/hub/2016/08/26/67f863c3-c1fe-44d8-a9bb-1e399849c83e/3120975-resident-evil-7-house.jpg?auto=webp&width=1092';
            break;                      
        default:
            imgLink = 'https://www.cnet.com/a/img/resize/5ef75c0c17cfdb8da6dad705d50161f1f43da86a/hub/2016/08/26/67f863c3-c1fe-44d8-a9bb-1e399849c83e/3120975-resident-evil-7-house.jpg?auto=webp&width=1092';}

    return imgLink;
};

$('.add-button').on('click', function () {
    const title = $(this).data('title');
    const price = $(this).data('price');
    const imgLink = getImgLink(title);

    const element = `
        <li class="cart-item">
            <img src="${imgLink}" alt="${title}">
            <div class="cart-item-dets">
                <p class="cart-item-heading">${title}</p>
                <p class="g-price">$${price}</p>
            </div>
        </li>
    `;
     $('.cart-items').append(element);
      
    subtotal = subtotal + price;
    // beep beep beep 
    const formattedSubtotal = subtotal.toFixed(2);
    const tax = calculateTax(subtotal);
    const total = calculateTotal(subtotal);

    $('.cart-math').html(`
        <p class="cart-math-item">
            <span class="cart-math-header">Subtotal:</span>
            <span class="g-price subtotal">$${formattedSubtotal}</span>
        </p>
        <p class="cart-math-item">
            <span class="cart-math-header">Tax:</span>
            <span class="g-price tax">$${tax}</span>
        </p>
        <p class="cart-math-item">
            <span class="cart-math-header">Total:</span>
            <span class="g-price total">$${total}</span>
        </p>
    `);
});
      
// for checkout form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}  
