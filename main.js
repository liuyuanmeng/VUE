const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            // solution
            // onSale: true
            // solution
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
              ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
            // this.cart refer back the data on the top (cart=0)
        },
        updateImage(variantImage) {
            this.image = variantImage

        },
        deleteFromCart() {
            this.cart -= 1
            
        }
    }
})