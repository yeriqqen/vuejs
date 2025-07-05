const app = Vue.createApp({
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
            cartItems: 0,
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
        addToCart() {
            this.cartItems++;
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
})
