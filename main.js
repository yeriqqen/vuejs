const app = Vue.createApp({
    data: function() {
        return {
            product: 'Premium Cotton Socks',
            description: 'Experience ultimate comfort with our premium cotton socks. Perfect for daily wear, these socks provide exceptional softness and durability.',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue/',
            onSale: true,
            sizes: ['S', 'M', 'L', 'XL'],
            selectedSize: null,
            cartItems: 0
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
        }
    }
})
