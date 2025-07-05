app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        },
        cartItems: {
            type: Number,
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
        <div class="product-container">
          <div class="product-badge" v-if="onSale">
                <span class="sale-badge">🔥 ON SALE</span>
              </div>
          <div class="product-image" :hidden="!inStock">
            <img :src="image" alt="A pair of socks" @mouseover="nextColorImage(image)" @mouseleave="nextColorImage(image)"/>
          </div>
          
          <div class="product-image" :hidden="inStock">
            <img :src="imageOutOfStock" alt="Out of stock"/>
          </div>
          

          <div class="product-info">
            <div class="content">
              <h1>{{ title }}</h1>
              <p>{{ description }}</p>
            </div>
            
            <div class="product-features">
              <div class="feature-item">
                <span class="feature-icon">✨</span>
                <span>Premium Quality</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🚚</span>
                <span>Free Shipping</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">💯</span>
                <span>100% Cotton</span>
              </div>
            </div>

            <div class="sizes-section">
              <h3>Available Sizes:</h3>
              <div class="size-options">
                <span v-for="size in sizes" :key="size" class="size-option">
                  {{ size }}
                </span>
              </div>
            </div>

            <div class="sizes-section">
              <h3>Available Sizes:</h3>
              <div class="size-options">
                <span v-for="variant in variants" :key="variant.id" class="size-option" @mouseover="updateImage(variant.image)">
                  {{ variant.color }}
                </span>
              </div>
            </div>
            
            <div class="product-actions">
              <button class="add-to-cart-btn" @click="addToCart" v-bind:disabled="!inStock">
                <span class="btn-icon">🛒</span>
                Add to Cart
              </button>
              <button class="remove-from-cart-btn" @click="removeFromCart" v-bind:disabled="!inStock">
                <span class="btn-icon">🛒</span>
                Remove from Cart
              </button>
              <a :href="url" target="_blank" rel="noopener noreferrer" class="learn-more-btn">
                <span class="btn-icon">📚</span>
                Learn Vue 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    data: function() {
        return {
            brand: 'Vue Mastery',
            product: 'Premium Cotton Socks',
            description: 'Experience ultimate comfort with our premium cotton socks. Perfect for daily wear, these socks provide exceptional softness and durability.',
            image: './assets/images/socks_green.jpg',
            imageOutOfStock: './assets/images/out_of_stock.png',
            url: 'https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue/',
            sizes: ['S', 'M', 'L', 'XL'],
            selectedSize: null,
            variants: [
                {
                    id: 2234,  image: './assets/images/socks_green.jpg', quantity: 10, color: 'green', quantity: 5
                },
                {
                    id: 2235, image: './assets/images/socks_blue.jpg', quantity: 0, color: 'blue', quantity: 0
                }
            ],  
            selectedVariant: 0,
        }
    },
    methods: {
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant]);
            // Simple animation feedback
            const btn = document.querySelector('.remove-from-cart-btn');
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        },
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant]);
            // Simple animation feedback
            const btn = document.querySelector('.add-to-cart-btn');
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        },
        updateImage(image) {
            this.image = image;
            this.selectedVariant = this.variants.findIndex(variant => variant.image === image);
        },
        nextColorImage(image) {
            this.image = this.variants.findIndex(variant => variant.image === image) == 0 ? this.variants[1].image : this.variants[0].image;
        },
    },
    computed: {
        inStock() {
            return this.variants[this.selectedVariant].quantity > 0;
        },
        onSale() {
            return this.variants[this.selectedVariant].quantity > 0 && this.variants[this.selectedVariant].quantity <= 5;
        },
        title() {
            if( this.onSale ) {
                return this.brand + ' ' + this.product + ' are on sale!';
            }
            return this.brand + ' ' + this.product;
        }
    }
});