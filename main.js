const app = Vue.createApp({
    data: function() {
        return {
            cartItems: [],
            premium: true,
        }
    },
    methods: {
        addCartItem(item) {
            this.cartItems.push(item);
        },
        removeCartItem(item) {
            const index = this.cartItems.indexOf(item);
            if (index > -1) {
                this.cartItems.splice(index, 1);
            }
        }
    },
    computed: {},
})
