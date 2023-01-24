const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carBtn = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector ('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
burgerBtn.addEventListener('click', toggleMobileMenu);
carBtn.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}
function toggleProductDetail() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
} 

const productList = [];
productList.push({
    name: 'Frame',
    price: 30,
    image: 'https://images.pexels.com/photos/4490130/pexels-photo-4490130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Cuadro',
    price: 50,
    image: 'https://images.pexels.com/photos/4490130/pexels-photo-4490130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Poster',
    price: 20,
    image: 'https://images.pexels.com/photos/4490130/pexels-photo-4490130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

/* <div class="product-card">
                <img src="https://images.pexels.com/photos/4490130/pexels-photo-4490130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="product">
                <div class="product-info">
                    <div>
                        <p>120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div> */

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
    
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute ('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);