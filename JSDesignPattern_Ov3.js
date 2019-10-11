const basketModule = (
  () => {

    const cart = {};

    return {
      addToCart: (products, prodID, quantity) => {
        if(quantity < 1) {
          console.log(`No product added.`);
        } else if (prodID in products) {
          cart[prodID] = products[prodID];
          cart[prodID].qty += quantity;

          console.log(`Added ${quantity} ${products[prodID].name}${quantity > 1 ? 's' : ''} to cart.`);
        } else {
          console.warn(`Product ${prodID} does not exist.`);
        }
      },

      seeCart: () => cart,

      totalPrice: () => {
        let total = 0;

        for (const item in cart) {
          total += cart[item].price * cart[item].qty;
        }

        return total;
      }

    }
  }
)();





const productModule = (
  () => {
    let idCount = 0;
    let products = {};

    class Product {
      constructor(name, price) {
        this.name = name;
        this.price = price;

        idCount++;

        products[idCount] = {
          name: name,
          price: price,
          qty: 0
        };
      }
    }

    new Product("Dog", 45);
    new Product("Cat", 29);
    new Product("Hamster", 12);
    new Product("Rat", 9);
    new Product("Horse", 123);
    new Product("Rabbit", 81);

    document.querySelector('.itemlist').innerHTML = `
    ${Object.keys(products).map( function(item) {
      console.log()
      return `
    <li class="product">
      <form class="product__container" data-id="${item}"><h1 class="product__header"><span class="product__name">${products[item].name}</span> <span class="product__price">($${products[item].price})</span> </h1>
      <input class="product__qty" type="number" value=${products[item].qty} min=0>
      <button class="product__submit">Add to Cart</button></form>
    </li>
      `
    } ).join('')}
    `

    return products;
  }
)();





document.addEventListener('submit', (e) => {
  e.preventDefault();

  let id = parseInt(e.target.dataset.id);
  let qty = parseInt(e.target.querySelector('.product__qty').value);

  basketModule.addToCart(productModule, id, qty);

  e.target.querySelector('.product__qty').value = 0;

  console.log(basketModule.seeCart(), basketModule.totalPrice());
})