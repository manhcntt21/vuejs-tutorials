const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            // fullname: '',
            lastName: '',
        };
    },
    watch: {
        // name(value) {
        //     console.log('name: watch running...');
        //     if (value === '') {
        //         this.fullname = '';
        //     } else {
        //         this.fullname = value + ' ' + this.lastName;
        //     }
        // },
        // lastName(value) {
        //     if (value === '') {
        //         this.fullname = '';
        //     } else {
        //         this.fullname = this.name + ' ' + value;
        //     }
        // },
        counter(value) {
            console.log('counter: watch running...');
            // const that = this;
            if (value > 50) {
                // setTimeout(function () {
                //     that.counter = 0;
                // }, 2000);
                setTimeout(() => {
                    this.counter = 0;
                }, 2000);
            }
        },
    },
    computed: {
        fullname() {
            console.log('Running again...');
            if (this.name === '' || this.lastName === '') {
                return '';
            }
            return this.name + ' ' + this.lastName;
        },
    },
    methods: {
        outputFullname() {
            console.log('Running again...');
            if (this.name === '') {
                return this.name + ' Do';
            }
            return this.name + ' Do';
        },
        resetInput() {
            this.name = '';
        },
        setName(event) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
    },
});

app.mount('#events');
