import axios from 'axios';
import Rating from '../component/rating';


const HomeScreen = {
  render: async () => {

      const response = await axios({
          url: "http://localhost:5000/api/products",
          headers: {
              'content-Type': 'appliction/json',
          },
      })
      if (!response || response.statusText !== 'OK') {
          return `<div> Error in getting Data</div>`;
      }
      const products = response.data;
      return `
     <ul class="products">
       ${products.map(product =>`
      <li>
          <div class="product">
                  <a href="/#/product/${product._id}">
                      <img src="${product.image}" alt="${product.name}">
                  </a>
                  <div class="product-name">
                      <a href="/#/product/5">
                         ${product.name}
                      </a>
                  <div class="product-rating">
                  ${Rating.render({value:product.rating,text:`${product.numReviews} reviews`})}
                  </div>
                  <div class="product-brand">
                       ${product.brand}
                  </div>
                  <div class="product-price">
                     ${product.price}
                  </div>
          </div>
      </li>
       
       `).join('\n')}
    `
  },
}

export default HomeScreen;