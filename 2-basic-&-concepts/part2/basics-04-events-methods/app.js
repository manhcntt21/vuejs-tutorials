const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            num: 20,
            name: '',
            confirmedName: '',
        };
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        submitForm(event) {
            // event.preventDefault();
            alert('Submitted');
        },
        setName(event, national) {
            this.name = event.target.value + ' ' + national;
        },
        increment(num) {
            this.counter = this.counter + num;
        },
        decrement(num) {
            this.counter = this.counter - num;
        },
    },
});

app.mount('#events');
