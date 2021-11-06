const app = Vue.createApp({
    data() {
        return {
            product: 'Bike',
            image: './assets/images/001black/black001.JPG',
            inStock: true,
            details: ['Brakes', 'Frame', 'Saddle'],
            variants: [{
                    variantId: 01,
                    variantVue: 'side',
                    variantImage: './assets/images/001black/black001.JPG'
                },
                {
                    variantId: 02,
                    variantVue: 'third',
                    variantImage: './assets/images/001black/black002.JPG'
                },
                {
                    variantId: 03,
                    variantVue: 'front',
                    variantImage: './assets/images/001black/black003.JPG'
                }
            ]
        }
    },
    methods: {
        clickMethod() {
            image = "variant.variantImage" //add code that you wish to happen on click
        }
    }
});