const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoal: '',
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
      this.enteredGoal = '';
    },

    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount('#user-goals');
