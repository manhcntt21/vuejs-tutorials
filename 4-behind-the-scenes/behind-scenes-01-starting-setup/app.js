const app = Vue.createApp({
    data() {
        return {
            currentUserInput: '',
            message: 'Vue is great!',
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            // this.message = this.currentUserInput;
            this.message = this.$refs.userText.value;
            // console.log(this.$refs.userText);
            // console.dir(this.$refs.userText);
        },
    },

    beforeCreate() {
        console.log('beforeCreate()');
        console.log(this.message);
    },

    created() {
        console.log('create()');
    },

    beforeMount() {
        console.log('beforeMount()');
    },

    mounted() {
        console.log('mounted()');
    },

    beforeUpdate() {
        console.log('beforeUpdate()');
    },

    updated() {
        console.log('updated()');
    },

    beforeUnmount() {
        console.log('beforeUnmount()');
    },

    unmounted() {
        console.log('unmounted()');
    },
});

app.mount('#app');

// setTimeout(function () {
//     app.unmount();
// }, 3000);

const app2 = Vue.createApp({
    template: `
      <p>{{ favoriteMeal }}</p>
      <p>{{ favoriteMeal }}</p>
    `,

    data() {
        return {
            favoriteMeal: 'Pizza',
        };
    },

    methods: {},
});

app2.mount('#app2');
// let message = "Hello!";

// let longMessage = message + " World!";

// console.log(longMessage);

// message = "Hello !!!";

// console.log(longMessage);

const data = {
    message: 'Hello!',

    longMessgae: 'Hello!!! World!!!',
};

const handler = {
    set(target, key, value) {
        // console.log(target);
        // console.log(key);
        // console.log(value);
        if (key === 'message') {
            target.longMessgae = value + ' World!!!';
        }
        target.message = value;
    },
};
// wrap this object with proxy in javascript
const proxy = new Proxy(data, handler);

proxy.message = 'Helllo!!!! ';

// console.log(proxy.longMessgae);
